<template>
  <section class="columns">
    <app-stock v-for="stock in stocks" :stock="stock":key="stock.name"></app-stock>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Stock from './Stock.vue'

export default {
  components: {
    appStock: Stock
  },
  computed: {
    chunkedStocks() {

    },
    stocks() {
      return this.$store.state.stocks
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
