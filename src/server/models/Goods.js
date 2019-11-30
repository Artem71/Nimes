const mongoose = require('mongoose')
const { Schema } = mongoose

const Good = new Schema({
  category: String,
  name: String,
  description: String,
  color: Object,
  price: String
})

module.exports = mongoose.model('Good', Good)