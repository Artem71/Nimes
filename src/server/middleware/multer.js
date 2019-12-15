const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const date = new Date()

    const folder = req.body.category
    const monthFolder = `${date.getFullYear()}-${date.getMonth() + 1}`

    fs.mkdir(`../../public/static/uploads/${folder}`, { recursive: true }, (err) => {
      if (err) throw err
    })

    fs.mkdir(`../../public/static/uploads/${folder}/${monthFolder}`, { recursive: true }, (err) => {
      if (err) throw err
    })

    cb(null, `../../public/static/uploads/${folder}/${monthFolder}`)
  },
  filename(req, file, cb) {
    const format = file.originalname.slice(file.originalname.lastIndexOf('.'))
    cb(null, file.fieldname + '-' + Date.now() + format)
  }
})

const fileFilter = (req, file, cb) => {
  if(file.mimetype === "image/png" || 
     file.mimetype === "image/jpg"|| 
     file.mimetype === "image/jpeg") {
    cb(null, true);
  }
  else{
      cb(null, false);
  }
}

const upload = multer({ storage, fileFilter })

module.exports = upload