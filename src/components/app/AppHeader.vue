<template>
  <header>
    <div class="header-wrapper">
      <div class="info-wrapper">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">All categories</a></li>
            <li class="breadcrumb-item"><a href="#">Woman</a></li>
            <li class="breadcrumb-item active" aria-current="page">Jackets</li>
          </ol>
        </nav>  
        <h1>Denim collection Fall 2019</h1>  
      </div>
      <div class="img-wrapper">
        <app-decorative :width="'232px'" :height="'176px'"  class="decor decor-top" />
        <img src="/static/common/header-fall2019.jpg" alt="fall 2019">
        <app-decorative :width="'178px'" :height="'135px'" class="decor decor-bottom" />
      </div>
    </div>
  </header>
</template>

<script>
import AppDecorative from '@/components/app/Decorative.vue'

export default {
  components: {AppDecorative}
}
</script>

<style lang="sass" scoped>
  header
    background-color: #f1f2f4
    margin: 0
    padding: 0
    width: 100%

  .header-wrapper
    display: flex
    justify-content: center
    align-items: center

  .info-wrapper
    padding-right: 70px

  .breadcrumb
    background-color: transparent

  .breadcrumb-item
    a
      font-size: 18px
      font-weight: 500
      color: #727A82

  .breadcrumb-item.active
    font-size: 18px
    font-weight: 500
    color: #151C22

  h1
    max-width: 270px
    font-size: 32px
    font-weight: bold

  .img-wrapper
    position: relative

  img
    position: relative
    z-index: 10

  .decor 
    position: absolute

  .decor-top
    top: 0
    right: -30px

  .decor-bottom
    bottom: 0
    left: -30px

</style>