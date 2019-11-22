const mongoose = require('mongoose')
const { Schema } = mongoose

const Good = new Schema({
  name: String,
  email: String,
  address: String,
  gender: String
})

module.exports = mongoose.model('Good', Good)