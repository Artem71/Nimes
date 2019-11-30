<template>
  <div class="form-group pick-color" @click="addColor">
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="productColorLightBlue" value="LightBlue" v-model="color['light-blue']">
      <label class="form-check-label" for="productColorLightBlue">
        <span class="productColor-circle"></span>
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="productColorDarkBlue" value="DarkBlue" v-model="color['dark-blue']">
      <label class="form-check-label label-dark-blue" for="productColorDarkBlue">
        <span class="productColor-circle dark-blue"></span>
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="productColorGrey" value="Grey" v-model="color.grey">
      <label class="form-check-label label-dark-grey" for="productColorGrey">
        <span class="productColor-circle grey"></span>
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="productColorBlack" value="Black" v-model="color.black">
      <label class="form-check-label label-black" for="productColorBlack">
        <span class="productColor-circle black"></span>
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="productColorWhite" value="White" v-model="color.white">
      <label class="form-check-label label-dark-white" for="productColorWhite">
        <span class="productColor-circle white"></span>
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="productColorBlue" value="Blue" v-model="color.blue">
      <label class="form-check-label label-dark-blue" for="productColorBlue">
        <span class="productColor-circle blue"></span>
      </label>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .productColor-circle 
    display: block
    margin: 0 auto
    width: 20px
    height: 20px
    background-color: #B0C3C7
    border-radius: 50%

  .pick-color .form-check-label:before
    content: ''
    position: absolute
    display: none
    top: 50%
    left: 50%
    margin-top: -13px
    margin-left: -13px
    width: 26px
    height: 26px
    border-radius: 50%
    background-color: transparent
    border: 1px solid #B0C3C7
  
  .pick-color .form-check-input 
    display: none

  .pick-color .form-check-input:checked + .form-check-label:before
    display: block

  .dark-blue
    background-color: #3B6392

  .grey
    background-color: #BFC3C8

  .black
    background-color: #2D2E2E

  .white
    background-color: #ECECEC

  .blue
    background-color: #4193DA

  .pick-color .label-dark-blue:before
    border: 1px solid #3B6392

  .pick-color .label-grey:before
    border: 1px solid #BFC3C8

  .pick-color .label-black:before
    border: 1px solid #2D2E2E

  .pick-color .label-white:before
    border: 1px solid #ECECEC

  .pick-color .label-blue:before
    border: 1px solid #4193DA
  
</style>