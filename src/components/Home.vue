<template>
    <div class="box">
        <h1 class="title is-1 has-text-grey">Trade or View Your Portfolio</h1>
        <p class="subtitle has-text-grey">Click on 'End Day' to begin a new day.</p>
        <hr>
        <p class="title is-spaced is-4">Your funds: ${{ funds }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'funds'
  ])
}
</script>

<style lang="sass" scoped>

</style>