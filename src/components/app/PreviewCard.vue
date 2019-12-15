<template>
  <div>
      <a @click.prevent="showProduct">
        <img :src="card.images[0]" alt="some">
        <h4>{{card.category}}</h4>
        <p>{{card.price | price}}</p>
      </a>
    </div>
</template>

<script>
export default {
  props: ['card'],
  methods: {
    showProduct() {
      console.log(`Pick this card ${this.card._id}`)
    }
  }
}
</script>

<style lang="sass" scoped>
  a
    display: block
    width: 100%
    height: 100%
    cursor: pointer

  img
    max-width: 270px
    max-height: 349px

  h4
    margin-top: 24px
    font-weight: 500
    font-size: 18px

  p
    font-weight: bold
</style>