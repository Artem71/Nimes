<template>
  <nav class="container">
    <div class="left-menu-wrapper">
      <ul 
        class="nav justify-content-between"
        :class="{'main-page': this.$route.name === 'main'}"  
      >
        <li class="nav-item">
          <a class="nav-link active" href="#">Woman</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Man</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">New</a>
        </li>
      </ul>
    </div>

    <router-link to="/categories" class="logo">Nimes</router-link>

    <div class="right-menu-wrapper">
      <ul 
        class="nav justify-content-between"
        :class="{'main-page': this.$route.name === 'main'}"  
      >
        <router-link
          tag="li"
          to="/"
        > <a href="#"><i class="fas fa-search"></i></a>
        </router-link>
        <router-link
          tag="li"
          to="/"
        >
          <a href="#"><i class="fas fa-shopping-cart"></i></a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mainPage: false
    }
  }
}
</script>

<style lang="sass" scoped>
  nav 
    position: relative
    display: flex
    align-items: center
    padding: 20px 0
    font-weight: 500

  .left-menu-wrapper
    position: absolute
    max-width: 200px

    a
      padding: 5px 10px

  .logo 
    display: block
    margin: 0 auto
    font-weight: 800
    font-size: 24px

  .right-menu-wrapper
    position: absolute
    right: 0
    display: flex
    justify-content: space-between
    width: 74px

    .nav 
      width: 100%

  .main-page 
    position: absolute
    top: 80px
    left: 0px
    flex-direction: column
    z-index: 100
    
    a
      padding: 5px 0
    
  .right-menu-wrapper .main-page 
    left: auto
    right: 0px
    text-align: right

    i
      padding: 15px 0
</style>