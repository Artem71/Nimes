<template>
  <div class="row footer">
    <a>
      <h2>Nimes</h2>
    </a>
    <ul class="nav">
      <li 
      v-for="(link, i) in links"
      :key="i"
      class="nav-item"
      >
        <router-link class="nav-link" :to="link.to">{{link.name}}</router-link>
      </li>
    </ul>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fab fa-facebook-f"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fab fa-instagram"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fab fa-vk"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fab fa-twitter"></i></a>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {name: 'Shop', to: '/'},
        {name: 'Delivery', to: '/'},
        {name: 'Service', to: '/'},
        {name: 'Sitemap', to: '/'},
        {name: 'Contacts', to: '/'},
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .footer
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding: 45px 0
    background-color: #151C22

  h2
    font-size: 24px
    font-weight: 900

  a
    color: #fff !important
    font-size: 18px
    font-weight: 600
</style>