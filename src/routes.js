import Home from './components/Home.vue'
import Stocks from './components/Stocks.vue'
import Investments from './components/Investments.vue'

export const routes = [
    { path: '', component: Home},
    { path: '/stocks', component: Stocks},
    { path: '/portfolio', component: Investments},
]