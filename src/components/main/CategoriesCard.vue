<template>
  <div>
    <a>
      <img 
        :src="category.imageSrc" 
        :alt="`image of ${category.title}`"
        :class="{'even': checkEven}"
      >
      <h4>{{category.title}}</h4>
    </a>
  </div>
</template>

<script>
export default {
  props: ['category', 'index'],
  computed: {
    checkEven() {
      return (this.index + 1) % 2 === 0
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

  .even
    max-height: 290px

  h4
    margin-top: 24px
    font-weight: 500
    font-size: 18px
</style>