export default {
  state: {
    bestsellerCards: []
  },
  mutations: {
    setCards(state, cards) {
      state.bestsellerCards = cards
    }
  },
  actions: {
    async fetchBestSellersCards({commit}) {
      const res = await fetch('http://localhost:3000/api/goods/bestsellers')
      const cards = await res.json()
      commit('setCards', cards)
    }
  },
  getters: {
    bestsellerCardsPreview(state) {
      const cards = state.bestsellerCards.filter((c, i) => {
        return i < 4
      })
      return cards
    }
  }
}