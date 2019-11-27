const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
//const path = require('path')

const app = express()

app.set('get', 3000)

app.listen(app.get('get'), () => {
  global.console.log(`[OK] Server started in port ${app.get('get')}`)
})

mongoose.connect('mongodb://localhost:27017/nimes', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('DB is connected'))
  .catch(error => console.error(error))

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

app.use('/api/goods', require('./routes/goods'))