const mongoose = require('mongoose')
const { Schema } = mongoose

const goodsSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  description: String,
  color: Object,
  price: {
    type: Number,
    required: true
  },
  images: Array,
  bestsellers: {
    type: Boolean,
    default: false
  }
}, {
  versionKey: false,
})

module.exports = mongoose.model('goods', goodsSchema)