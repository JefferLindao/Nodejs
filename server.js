const express = require('express')
const bodyParse = require('body-parser')
const { urlencoded } = require('body-parser')
const router = express.Router()

var app = express()

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }))
app.use(router)

router.get('/message', function (req, res) {
  console.log(req.headers)
  res.header({
    "custom-header": "Nuestro valor personalizado"
  })
  res.send('Lista de mensaje')
})

router.post('/message', function (req, res) {
  res.send('Mensaje añadido')
})

router.delete('/message', function (req, res) {
  console.log(req.query)
  console.log(req.body)
  res.send('Mensaje ' + req.body.id + " añadido correctamente")
})

app.listen(3000)
console.log('La aplicacion esta escuchando en el http://localhost:3000')
