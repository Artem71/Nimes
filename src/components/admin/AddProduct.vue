<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <form>
          <h2 class="card-title">Добавить продукт</h2>

          <div class="form-group">
            <label for="productCategory">Выберите категорию продукта</label>
            <select class="form-control" id="productCategory">
              <option>Overalls</option>
              <option>Jacket</option>
              <option>Shirts</option>
              <option>Jeans</option>
            </select>
          </div>

          <div class="form-group">
            <label for="productName">Введите название продукта</label>
            <input type="text" class="form-control" id="productName" placeholder="Введите название продукта">
          </div>

          <div class="form-group">
            <label for="productDescription">Введите описание продукта</label>
            <input type="text" class="form-control" id="productDescription" placeholder="Введите описание продукта">
          </div>

          <div class="form-group pick-color">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="productColorLightBlue" value="LightBlue">
              <label class="form-check-label" for="productColorLightBlue">
                <span class="productColor-circle"></span>
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="productColorDarkBlue" value="DarkBlue">
              <label class="form-check-label label-dark-blue" for="productColorDarkBlue">
                <span class="productColor-circle dark-blue"></span>
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="productColorGrey" value="Grey">
              <label class="form-check-label label-dark-grey" for="productColorGrey">
                <span class="productColor-circle grey"></span>
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="productColorBlack" value="Black">
              <label class="form-check-label label-black" for="productColorBlack">
                <span class="productColor-circle black"></span>
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="productColorWhite" value="White">
              <label class="form-check-label label-dark-white" for="productColorWhite">
                <span class="productColor-circle white"></span>
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="productColorBlue" value="Blue">
              <label class="form-check-label label-dark-blue" for="productColorBlue">
                <span class="productColor-circle blue"></span>
              </label>
            </div>
          </div>

          <div class="form-group pick-size">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="productSize-xs" value="xs">
              <label class="form-check-label" for="productSize-xs">xs</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="productSize-s" value="s">
              <label class="form-check-label" for="productSize-s">s</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="productSize-m" value="m">
              <label class="form-check-label" for="productSize-m">m</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="productSize-l" value="l">
              <label class="form-check-label" for="productSize-l">l</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="productSize-xl" value="xl">
              <label class="form-check-label" for="productSize-xl">xl</label>
            </div>
          </div>

          <div class="form-group">
            <label for="productCost">Введите стоимость продукта</label>
            <input type="text" class="form-control" id="productCost" placeholder="Введите стоимость продукта">
          </div>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

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
</style>