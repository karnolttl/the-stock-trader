<template>
      <nav class="navbar">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item subtitle has-text-weight-bold" exact>Stock Trader</router-link>
        </div>
        <div class="navbar-start">
          <router-link to="/portfolio" class="navbar-item is-link" active-class="is-active">Portfolio</router-link>
          <router-link to="/stocks" class="navbar-item is-link" active-class="is-active">Stocks</router-link>
        </div>
        <div class="navbar-end">
          <p class="navbar-item has-text-weight-bold"><a href="#" @click.prevent="endDay">End Day</a></p>
          <p class="navbar-item subtitle">Funds: ${{ funds }}</p>
        </div>
      </nav>
</template>

<script>
import { mapState } from 'vuex'
import Stock from './Stock.vue'

export default {
  components: {
    appStock: Stock
  },
  computed: mapState([
    'funds'
  ]),
  methods: {
    endDay() {
      this.$store.commit('endDay')
    }
  }
}
</script>

<style lang="sass" scoped>

</style>