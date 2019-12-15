<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <form @submit.prevent="handleAddProducts" enctype="multipart/form-data" ref="form">
          <h2 class="card-title">Добавить продукт</h2>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="productCategory">Выберите категорию продукта</label>
              <select class="form-control" id="productCategory" v-model="formData.category" name="category">
                <option disabled>Categories</option>
                <option>Overalls</option>
                <option>Jacket</option>
                <option>Shirts</option>
                <option>Jeans</option>
              </select>
            </div>
            <div class="form-group col-md-6 add-file-wrapper">
              <div class="custom-file">
                <input 
                  type="file"
                  ref="images" 
                  accept="image/*" 
                  name="images"
                  multiple="true"
                  class="custom-file-input"
                  id="customFile"
                  @change="handleFileUpload"
                >
                <label class="custom-file-label" for="customFile">Добавте фото</label>
              </div>
            </div>
            <div v-if="images" class="w-100 text-center mt-3" style="height: 100px" ref="imgContainer"></div>
          </div>

          <div class="form-group">
            <label for="productDescription">Введите описание продукта</label>
            <textarea type="text" 
                      class="form-control" 
                      id="productDescription" 
                      placeholder="Введите описание продукта" 
                      v-model="formData.description"
                      name="description"
            ></textarea>
          </div>

          

          <h2 class="text-center">Укажите цвет, размер и колличество товара</h2>
          <table class="table table-striped table-bordered table-dark" ref="table">
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

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="productPrice">Введите стоимость продукта</label>
              <input type="text" 
                    class="form-control" 
                    id="productPrice" 
                    placeholder="Введите стоимость продукта" 
                    v-model="formData.price"
                    name="price"
              >
            </div>
            <div class="form-group col-md-6">
              <label for="productGender">Выберите категорию продукта</label>
              <select class="form-control" id="productGender" v-model="formData.gender" name="gender">
                <option>Man</option>
                <option>Woman</option>
              </select>
            </div>
            <div class="form-check">
              <input 
                class="form-check-input" 
                type="checkbox" 
                v-model="formData.bestsellers"
                id="defaultCheck1"
              >
              <label class="form-check-label" for="defaultCheck1">
                This is bestsellers?
              </label>
            </div>
          </div>
          
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => {
    return {
      images: false,
      formData: {
        category: 'Categories',
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
          }
        },
        price: '',
        gender: 'man',
        bestsellers: false,
        images: null,
      }
    }
  },
  methods: {
    async handleAddProducts() {
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

              this.formData.color[pickColor][size] = quantity
            }
          }
        })
      }

      const fd = new FormData(this.$refs.form)
      fd.append('color', this.formData.color)
      fd.append('bestsellers', this.formData.bestsellers)

      axios.post('http://localhost:3000/api/goods', fd)
        .then(response => console.log(response))
        .catch(e => console.log(e))

      this.formReset()
    },
    handleFileUpload() {
      const files = this.$refs.images.files
      this.images = true

      files.forEach(f => {
        if (!f.type.match('image.*')) {
          alert("Загружаем только картинки....")
        }

        const reader = new FileReader()
        reader.onload = e => {
          this.formData.imageSrc = e.target.result
          const span = document.createElement('span')
          const div = this.$refs.imgContainer

          const style = 'style="height: 100px; margin-right: 10px"'
          span.innerHTML = ['<img class="thumb"', style, 'title="', escape(f.name), '" src="',  e.target.result, '" />'].join('')
          div.insertBefore(span, null);
        }

        reader.readAsDataURL(f)
      })
    },
    formReset() {
      this.formData = {
        category: 'Categories',
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
          }
        },
        price: '',
        bestsellers: false,
        images: null,
      }
      this.images = false
    }
  }
}
</script>

<style lang="sass" scoped>
  .add-file-wrapper
    padding-top: 32px

  #productDescription
    resize: none

  .productColor-circle 
    display: block
    margin: 0 auto
    width: 20px
    height: 20px
    background-color: #B0C3C7
    border-radius: 50%

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

  .form-check
    padding: 35px 0 0 50px
</style>