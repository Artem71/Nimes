<template>
  <div class="wrapper col-12">
    <div class="image-wrapper">
      <img src="@/assets/main/main-middle-block.jpg" alt="middle block image">
    </div>
    <div class="info-wrapper">
      <div class="info">
        <h3>Street fashion collection</h3>
        <h2>Fall 2019</h2>
        <button class="btn">Shop now</button>
      </div>
      <div class="decor">
        <span v-for="span of 22" :key="span"></span>
      </div>
    </div>
  </div>
</template>


<style lang="sass" scoped>
  .wrapper 
    display: flex
    align-items: center
    padding: 115px 0 0 0

  .image-wrapper
    max-width: 700px

  .info-wrapper
    position: relative
    padding: 31px 70px 31px 0
    max-height: 370px
    overflow: hidden


  .decor
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    transform: rotate(-45deg) translate(-48px, -114px)
    z-index: -1

    span
      display: block
      margin-bottom: 25px
      width: 120%
      height: 2px
      background-color: black

  .info
    padding: 67px 110px 70px 70px
    background-color: #F1F2F4

    h3
      font-size: 18px
      color: #727A82
      margin-bottom: 10px

    h2
      font-size: 32px
      font-weight: bold
      margin-bottom: 40px
</style>

