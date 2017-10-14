<template>
  <div id="app">
      <div class="container">
        <app-navbar></app-navbar>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Stocks from './components/Stocks.vue'
import Investments from './components/Investments.vue'

export default {
  components: {
    appNavbar: Navbar,
    appHome: Home,
    appStocks: Stocks,
    appInvestments: Investments
  }
}
</script>
