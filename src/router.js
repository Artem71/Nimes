import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('./views/Main.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('./views/Categories.vue')
    },
    {
      path: '/product',
      name: 'product-card',
      component: () => import('./views/ProductCard.vue')
    }
    
  ]
})

export default router