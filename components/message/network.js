const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function (req, res) {
  console.log(req.headers)
  res.header({
    "custom-header": "Nuestro valor personalizado"
  })

  response.success(req, res, 'Lista de mensaje')
})

router.post('/', function (req, res) {

  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201)
    })
    .catch(e => {
      response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador')
    })
})

router.delete('/', function (req, res) {
  console.log(req.query)
  console.log(req.body)
  /* res.send('Mensaje ' + req.body.id + " añadido correctamente") */
  response.success(req, res, 'Eliminado correctamente')
})

module.exports = router
