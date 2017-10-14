<template>
  <div class="column">
    <div class="card">
      <div class="card-content">
        <p class="title">{{ stock.name }}</p>
        <p class="subtitle">${{ stock.price }}</p>
        <div class="card-item"></div>
        <div class="field has-addons">
            <div class="control">
                <input class="input" type="text" placeholder="Number of stocks" v-model="qty">
            </div>
            <div class="control">
                <button class="button is-info" @click.prevent="buyStock" :disabled="isValid" >Buy</button>
            </div>
        </div>  
      </div>  
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['stock'],
  data: function() {
    return {
        qty: ''
    }
  },
  computed: {
    funds() {
      return this.$store.state.funds
    },
    isValid() {
      let enoughFunds = true
      if (!isNaN(this.qty)) {
        enoughFunds = this.funds >= (this.qty * this.stock.price)
      }
      return !this.qty || !enoughFunds || isNaN(this.qty)
    }
  },
  methods: {
    buyStock() {
      this.$store.commit('buyStock', 
      {
        name: this.stock.name, 
        price: this.stock.price, 
        qty: parseInt(this.qty, 10)
      })
      this.qty = ''
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
