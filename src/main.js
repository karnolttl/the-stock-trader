import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
require('./assets/sass/main.scss')

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    funds: 800,
    stocks: [
      {
        name: 'Sesame Oil',
        price: 100,
      },
      {
        name: 'Garlic',
        price: 100,
      },
      {
        name: 'Tumeric',
        price: 100,
      },
      {
        name: 'Ginger',
        price: 100,
      },
    ],
    investments: []

  },
  actions: {

  },
  mutations: {
    buyStock (state, stock) {
      state.funds -= (stock.price * stock.qty)
      let index = state.investments.findIndex( (s) => {
        return s.name === stock.name;
      })
      if (index == -1) {
        state.investments.push({name: stock.name, qty: stock.qty})
      } else {
        state.investments[index].qty += stock.qty
      }
      
    },
    sellInvestment (state, investment) {
      let index = state.investments.findIndex( (s) => {
        return s.name === investment.name;
      })
      if (index == -1) {
        console.log("error!")
        return
      }
      state.investments[index].qty -= investment.qty
      let stock_index = state.stocks.findIndex( (s) => {
        return s.name === investment.name;
      })
      state.funds += (state.stocks[stock_index].price * investment.qty)
      if (state.investments[index].qty == 0) {
        let investments = state.investments
        investments.splice(investments.indexOf(investment), 1)
      }
    },
    endDay (state) {
      let stocks =  state.stocks
      stocks.forEach((stock) => {
        let v = Math.floor(Math.random() * (110 - 90)) + 90
        stock.price = v
      });
    }
  },
  getters: {

  },
  modules: {

  }
})



new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
