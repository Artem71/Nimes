<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <form @submit.prevent="handleAddProducts">
          <h2 class="card-title">Добавить продукт</h2>

          <div class="form-group">
            <label for="productCategory">Выберите категорию продукта</label>
            <select class="form-control" id="productCategory" v-model="category">
              <option>Overalls</option>
              <option>Jacket</option>
              <option>Shirts</option>
              <option>Jeans</option>
            </select>
          </div>

          <div class="form-group">
            <label for="productName">Введите название продукта</label>
            <input type="text" class="form-control" id="productName" placeholder="Введите название продукта" v-model="name">
          </div>

          <div class="form-group">
            <label for="productDescription">Введите описание продукта</label>
            <input type="text" class="form-control" id="productDescription" placeholder="Введите описание продукта" v-model="description">
          </div>

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

          <div class="form-group">
            <label for="productPrice">Введите стоимость продукта</label>
            <input type="text" class="form-control" id="productPrice" placeholder="Введите стоимость продукта" v-model="price">
          </div>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      category: '',
      name: '',
      description: '',
      color: {
        'light-blue': 0,
        'dark-blue': 0,
        'grey': 0,
        'black': 0,
        'white': 0,
        'blue': 0
      },
      size: {
        xs: 0,
        s: 0,
        m: 0,
        l: 0,
        xl: 0
      },
      price: 0,
      showPopup: false
    }
  },
  methods: {
    handleAddProducts() {
      const formData = {
        category: this.category,
        name: this.name,
        description: this.description,
        color: this.color,
        size: this.size,
        price: this.price
      }

      console.log(formData)
    },
    addColor(event) {
      const currencyColor = event.target
      if (currencyColor.tagName == 'INPUT') {
        this.showPopup = true
        console.log(currencyColor.value)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .productColor-circle 
    display: block
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
  
  .pick-size .form-check-label
    font-size: 18px
    font-weight: 500
    text-transform: Uppercase
    color: #727A82

  .pick-size .form-check-input
    display: none

  .pick-size .form-check-input:checked + .form-check-label
    color: #151C22

  .alert
    position: absolute
    top: 50%
    left: 50%
    width: 460px
    height: 240px
    margin-left: -230px
    margin-top: -120px
    z-index: 100
</style>