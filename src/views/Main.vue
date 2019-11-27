<template>
  <div>
    <Navbar />
    <Header />
    <BlockTitle :title="'Bestsellers'" />
  </div>
</template>

<script>

import Navbar from '@/components/app/Navbar.vue'
import Header from '@/components/main/Header.vue'
import BlockTitle from '@/components/app/BlockTitle.vue'

export default {
  data() {
    return {
      mainPage: true,
      name: '',
      email: '',
      address: '',
      gender: '',
      list: []
    }
  },
  methods: {
   
  },
  components: {
    Navbar, Header, BlockTitle
  }
}
</script>

<style lang="sass" scoped>

</style>