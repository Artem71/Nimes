<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="sass">
  #app
    font-family: 'Work Sans', sans-serif
    font-size: 16px

  a
    color: #151c22

  .btn 
    display: block
    padding: 19px 24px
    min-width: 200px
    background-color: #151c22
    color: #fff
    border-radius: 0
    transition: .3s

  .btn:hover
    color: #fff

  @media (min-width: 1200px)
    .container 
      max-width: 1170px !important

</style>
