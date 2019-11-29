<template>
  <div class="form-group pick-size">
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="productSize-xs" value="xs" v-model="size.xs">
      <label class="form-check-label" for="productSize-xs">xs</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="productSize-s" value="s" v-model="size.s">
      <label class="form-check-label" for="productSize-s">s</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="productSize-m" value="m" v-model="size.m">
      <label class="form-check-label" for="productSize-m">m</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="productSize-l" value="l" v-model="size.l">
      <label class="form-check-label" for="productSize-l">l</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="productSize-xl" value="xl" v-model="size.xl">
      <label class="form-check-label" for="productSize-xl">xl</label>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .pick-size .form-check-label
    font-size: 18px
    font-weight: 500
    text-transform: Uppercase
    color: #727A82

  .pick-size .form-check-input
    display: none

  .pick-size .form-check-input:checked + .form-check-label
    color: #151C22
</style>