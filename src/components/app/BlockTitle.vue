<template>
  <div class="wrapper container">
    <div class="d-flex justify-content-between">
      <h2>{{title}}</h2>
      <a href="#">
        View all
        <span></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="sass" scoped>
  .wrapper
    padding: 120px 0 60px

  h2
    display: inline-block
    font-size: 32px
    font-weight: bold

  a
    text-align: center
    font-size: 18px
    
    span
      display: block
      width: 80px
      height: 1.5px
      background-color: #000

  a:hover
    text-decoration: none
</style>