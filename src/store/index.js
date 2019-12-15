import Vue from 'vue'
import Vuex from 'vuex'
import previewCard from './previewCard'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    previewCard
  }
})