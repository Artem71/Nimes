<template>
  <nav>
    <div class="left-menu-wrapper">
      <ul class="nav justify-content-between">
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
    
    <router-link to="/" class="logo">Nimes</router-link>

    <div class="right-menu-wrapper">
      <ul class="nav justify-content-between">
        <router-link
          tag="li"
          to="/"
        >
          <i class="fas fa-search"></i>
        </router-link>
        <router-link
          tag="li"
          to="/"
        >
          <i class="fas fa-shopping-cart"></i>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<style lang="sass" scoped>
  nav 
    position: relative
    display: flex
    align-items: center
    padding-top: 20px
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
</style>