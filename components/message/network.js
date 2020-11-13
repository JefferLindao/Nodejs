const express = require('express')

const router = express.Router()

const response = require('../../network/response')

router.get('/', function (req, res) {
  console.log(req.headers)
  res.header({
    "custom-header": "Nuestro valor personalizado"
  })

  response.success(req, res, 'Lista de mensaje')
})

router.post('/', function (req, res) {
  console.log(req.query)
  if (req.query.error == 'ok') {
    response.error(req, res, 'Error simulado', 400, 'Error de la prueba')
  } else {
    response.success(req, res, 'Creado correctamente', 201)
  }
})

router.delete('/', function (req, res) {
  console.log(req.query)
  console.log(req.body)
  /* res.send('Mensaje ' + req.body.id + " añadido correctamente") */
  response.success(req, res, 'Eliminado correctamente')
})

module.exports = router
