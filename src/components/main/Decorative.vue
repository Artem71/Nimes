<template>
  <div class="decor-wrapper" :style="{'height': height, 'width': width}">
    <div class="decorative-touches" ref="div">
      <span v-for="span of 24" :key="span"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['width', 'height']
}
</script>

<style lang="sass" scoped>
  .decor-wrapper
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden
    
  .decorative-touches
    width: 100%
    height: 100%
    transform: rotate(-145deg) translateY(-45px)

    span
      display: block
      width: 200%
      height: 2px
      margin-left: -50%
      margin-bottom: 10px
      background-color: #151C22
</style>