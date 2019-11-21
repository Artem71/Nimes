<template>
  <div class="decorative-touches" ref="div">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
  </div>
</template>

<script>
export default {
  mounted() {
    let spans = this.$refs.div.children

    let right = -110
    spans.forEach((span) => {
      span.style.right += right + 'px'
      right += 19
    })
    
  }
}
</script>

<style lang="sass" scoped>
  .decorative-touches
    position: relative
    display: flex
    flex-direction: column
    width: 232px
    height: 176px
    overflow: hidden

    span
      position: absolute
      top: 0
      width: 250px
      height: 2px
      background-color: #151C22
      transform: rotate(45deg) translateX(125px)
</style>