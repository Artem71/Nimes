<template>
  <div>
    <Navbar />
    <AddProduct />
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import AddProduct from '@/components/admin/AddProduct'

export default {
  components: {
    Navbar, AddProduct
  }
}
</script>

<style lang="sass" scoped>

</style>