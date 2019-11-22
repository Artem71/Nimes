<template>
  <div>
    <Navbar />
    <Header />
    <BlockTitle :title="'Bestsellers'" />
    <form @submit.prevent="sendData" class="test">
      <input type="text" v-model="name">
      <input type="text" v-model="email">
      <input type="text" v-model="address">
      <input type="text" v-model="gender">
      <button>submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

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
      gender: ''
    }
  },
  methods: {
    async sendData() {
      try {
        const formData = {
          name: this.name,
          email: this.email,
          address: this.address,
          gender: this.gender
        }
        let res = await axios.post('http://localhost:3000/api/goods', formData)
        global.console.log(res)
      } catch(e) {
        global.console.log(e)
      }
    }
  },
  components: {
    Navbar, Header, BlockTitle
  }
}
</script>

<style lang="sass" scoped>

</style>