const express = require('express')
const bodyParse = require('body-parser')

const response = require('./network/response')

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

  response.success(req, res, 'Lista de mensaje')
})

router.post('/message', function (req, res) {
  console.log(req.query)
  if (req.query.error == 'ok') {
    response.error(req, res, 'Error simulado', 400)
  } else {
    response.success(req, res, 'Creado correctamente', 201)
  }
})

router.delete('/message', function (req, res) {
  console.log(req.query)
  console.log(req.body)
  /* res.send('Mensaje ' + req.body.id + " añadido correctamente") */
  response.success(req, res, 'Eliminado correctamente')
})

app.listen(3000)
console.log('La aplicacion esta escuchando en el http://localhost:3000')
