const express = require('express')
const router = express.Router()
const Good = require('../models/Goods')
const upload = require('../middleware/multer')

router.get('/', async (req, res) => {
  res.json(await Good.find())
})

router.get('/bestsellers', async (req, res) => {
  const cards = await Good.find({bestsellers: true})
  res.json(cards)
})

router.get('/categories', async (req, res) => {
  const categories = await Good.distinct("category")
  res.json(categories)
})

router.post('/', upload.array('images'), async (req, res) => {
  const good = new Good(req.body)
  req.files.forEach((f, i) => {
    good.images[i] = '.' + f.path.slice(12)
  })

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