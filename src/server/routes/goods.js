const express = require('express')
const router = express.Router()

const Good = require('../models/Goods')

router.get('/', async (req, res) => {
  res.json(await Good.find())
})

router.post('/', async (req, res) => {
  const good = new Good(req.body)
  await good.save()
  res.json({state: 'success'})
})

router.get('/:id', async (req, res) => {
  res.json(await Good.findById(req.params.id))
})

router.put('/', async (req, res) => {
  await Good.findByIdAndUpdate(req.params.id, req.body)
  res.json({state: 'success'})
})

router.delete('/', async (req, res) => {
  await Good.findByIdAndRemove(req.params.id)
  res.json({state: 'deleted'})
})

module.exports = router