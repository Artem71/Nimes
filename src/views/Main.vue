<template>
  <div>
    <app-navbar />
    <app-header />
    <div class="container" :class="{'text-center': loading}">

      <div class="row">
        <block-title :title="'Bestsellers'" />
      </div>
    
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      
      <div v-else>
        <div class="row">
          <div
            v-for="card in bestsellerCards"
            :key="card._id"
            class="col-md-3 preview-card"
          >
            <preview-card :card="card" />
          </div>
        </div>

        <div class="row">
          <middle-block-fall />
        </div>

        <div class="row">
          <block-title :title="'Shop by category'" />
        </div>

        <div class="row">
          <div
            v-for="(category, i) in categories"
            :key="category.title" 
            class="col-md-3 preview-category"
          >
            <categories-card :category="category" :index="i" />
          </div>
        </div>
          
      </div>

    </div>
  </div>
</template>

<script>

import AppNavbar from '@/components/app/Navbar.vue'
import AppHeader from '@/components/main/Header.vue'
import BlockTitle from '@/components/app/BlockTitle.vue'
import PreviewCard from '@/components/app/PreviewCard.vue'
import CategoriesCard from '@/components/main/CategoriesCard.vue'
import MiddleBlockFall from '@/components/main/MiddleBlockFall.vue'

export default {
  data() {
    return {
      mainPage: true,
      loading: true,
      categories: [
        {title: 'Jeans', imageSrc: './static/categories/catJeans.jpg'},
        {title: 'Shirts', imageSrc: './static/categories/catShirts.jpg'},
        {title: 'Jackets', imageSrc: './static/categories/catJackets.jpg'},
        {title: 'Overalls', imageSrc: './static/categories/catOveralls.jpg'}
      ]
    }
  },
  computed: {
    bestsellerCards() {
      return this.$store.getters.bestsellerCardsPreview
    } 
  },
  components: {
    AppNavbar, AppHeader, BlockTitle, PreviewCard, MiddleBlockFall, 
    CategoriesCard
  },
  async mounted() {
    this.$store.dispatch('fetchBestSellersCards')
    this.loading = false
    
  }
}
</script>

<style lang="sass" scoped>
  .preview-card,
  .preview-category 
    margin-right: 30px
    padding: 0
    max-width: 270px
    border: none

  .preview-card:nth-child(4n+4),
  .preview-category:nth-child(4n+4)
    margin-right: 0

  .preview-card,
  .preview-category 
    img
      max-height: 349px

  .preview-category:nth-child(even)
    img
      max-height: 290px
</style>