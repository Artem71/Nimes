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
          <table class="table table-striped table-dark" ref="table">
            <thead>
              <tr ref="colorName">
                <th scope="col">Size</th>
                <th scope="col" data-color="light-blue"><span class="productColor-circle"></span></th>
                <th scope="col" data-color="dark-blue"><span class="productColor-circle dark-blue"></span></th>
                <th scope="col" data-color="grey"><span class="productColor-circle grey"></span></th>
                <th scope="col" data-color="black"><span class="productColor-circle black"></span></th>
                <th scope="col" data-color="white"><span class="productColor-circle white"></span></th>
                <th scope="col" data-color="blue"><span class="productColor-circle blue"></span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">xs</th>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
              </tr>
              <tr>
                <th scope="row">s</th>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
              </tr>
              <tr>
                <th scope="row">m</th>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
              </tr>
              <tr>
                <th scope="row">l</th>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
              </tr>
              <tr>
                <th scope="row">xl</th>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
                <td><input type="text" placeholder="0" class="table-input"></td>
              </tr>
            </tbody>
          </table>
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
        'light-blue': {
          xs: 0,
          s: 0,
          m: 0,
          l: 0,
          xl: 0
        },
        'dark-blue': {
          xs: 0,
          s: 0,
          m: 0,
          l: 0,
          xl: 0
        },
        'grey': {
          xs: 0,
          s: 0,
          m: 0,
          l: 0,
          xl: 0
        },
        'black': {
          xs: 0,
          s: 0,
          m: 0,
          l: 0,
          xl: 0
        },
        'white': {
          xs: 0,
          s: 0,
          m: 0,
          l: 0,
          xl: 0
        },
        'blue': {
          xs: 0,
          s: 0,
          m: 0,
          l: 0,
          xl: 0
        },
      },
      price: 0,
      showPopup: false
    }
  },
  methods: {
    handleAddProducts() {
      const rows = this.$refs.table.rows

      for (let i = 1; i < rows.length; i++) {
        rows[i].childNodes.forEach((td, i) => {
          if (td.tagName === 'TD') {
            if (td.childNodes[0].value !== '') {
              // Получить указанное колличество
              const quantity = td.childNodes[0].value

              // Получить выбранный размер
              const size = td.childNodes[0].parentNode.parentNode.childNodes[0].innerHTML

              // Получить выбранный цвет
              const pickColor = this.$refs.colorName.childNodes[i].getAttribute('data-color')

              this.color[pickColor][size] = quantity
            }
          }
        })
      }
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
  
  .table-input
    background-color: transparent
    border: none
    outline: none
    width: 100%
    text-align: center
    color: #fff
</style>