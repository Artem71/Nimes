const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: 'provide'}))
app.use(bodyParser.json())


app.set('get', 3000)

app.listen(app.get('get'), () => {
  global.console.log(`[OK] Server started in port ${app.get('get')}`)
})

// Установил подключение по умолчанию
const mongoDB = 'mongodb://localhost:27017/nimes'

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('DB is connected'))
  .catch(error => console.error(error))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  
  next();
})

app.use('/api/goods', require('./routes/goods'))