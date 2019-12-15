<template>
  <div class="wrapper">
    <div class="header-wrapper container">
      <div class="header-content">
        <h2>The quality you deserve</h2>
        <h1>denim</h1>
        <button class="btn">Check new collection</button>
      </div>

      <div class="header-img">
        <Decorative :width="'232px'" :height="'176px'" class="decor-top" />
        <img class="img" src="@/assets/main/main-header.jpg" alt="woman">
        <Decorative :width="'232px'" :height="'176px'" class="decor-bottom" />
      </div>

      <i class="fas fa-long-arrow-alt-down"></i>

      <ul class="nav social-list">
        <li class="nav-item">
          <a class="nav-link active" href="#">Facebook</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Instagram</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Decorative from '@/components/main/Decorative.vue'

export default {
  components: {
    Decorative
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 100%
    background-color: #f1f2f4

  .header-wrapper 
    position: relative
    display: flex
    justify-content: center
    padding: 50px 0
    
  .header-content
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: center
    margin-right: 100px

  .img
    max-width: 430px
    position: relative
    z-index: 10

  h2
    font-size: 18px
    color: #727A82

  h1
    font-family: 'Anton', sans-serif
    font-size: 128px
    font-weight: bold
    text-transform: uppercase

  .header-img
    position: relative

  .decor-top
    position: absolute
    top: -50px
    left: -50px

  .decor-bottom
    position: absolute
    bottom: -50px
    right: -50px
    transform: rotateX(180deg)

  .fa-long-arrow-alt-down
    position: absolute
    bottom: 45px
    left: 0
    font-size: 27px
    cursor: pointer

  .social-list
    position: absolute
    bottom: 45px
    right: 0px
    flex-direction: column
    z-index: 100
    
    a
      padding: 8px 0
</style>