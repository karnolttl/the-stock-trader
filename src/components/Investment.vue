<template>
  <div class="column">
    <div class="card">
      <div class="card-content">
        <p class="title">{{ investment.name }}</p>
        <p class="subtitle">{{ qtyDisplay }}</p>
        <div class="card-item"></div>
        <div class="field has-addons">
            <div class="control">
                <input class="input" type="text" placeholder="Number of stocks" v-model="qty">
            </div>
            <div class="control">
                <button class="button is-info" :disabled="isValid" @click.prevent="sellInvestment" >Sell</button>
            </div>
        </div>  
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  props: ['investment'],
  computed: {
    isValid() {
      return !this.qty || this.qty > this.investment.qty || isNaN(this.qty)
    },
    qtyDisplay() {
      let val = this.investment.qty
      return (val == 1) ? `${val} stock` : `${val} stocks`
    }
  },
  data: function() {
    return {
        qty: ''
    }
  },
  methods: {
    sellInvestment() {
      this.$store.commit('sellInvestment', 
      {
        name: this.investment.name, 
        price: this.investment.price, 
        qty: parseInt(this.qty, 10)
      })
      this.qty = ''
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
