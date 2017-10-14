<template>
  <section class="columns">
    <div class="column" v-if="!investments.length">
      <div class="card">
        <div class="card-content">
          <p class="title">You don't have any investments yet!</p>
          <p class="subtitle">What are you waiting for? Start making some money!</p>
        </div>  
      </div>
    </div>
    <app-investment v-else v-for="investment in investments" :investment="investment" :key="investment.name"></app-investment>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Investment from './Investment.vue'

export default {
  components: {
    appInvestment: Investment
  },
  computed: mapState([
    'investments'
  ])
}
</script>

<style lang="sass" scoped>

</style>
