<template>
  <div>
    <app-navbar />
    <app-header />
  </div>
</template>

<script>
import AppNavbar from '@/components/app/Navbar.vue'
import AppHeader from '@/components/app/AppHeader.vue'

export default {
  components: {
    AppNavbar, AppHeader
  }  
}
</script>