const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function (req, res) {
  const filterUser = req.query.user || null
  controller.getUser(filterUser)
    .then((userList) => {
      response.success(req, res, userList, 200)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500, e)
    })
})

router.post('/', function (req, res) {

  controller.addUser(req.body.name)
    .then((user) => {
      response.success(req, res, user, 201)
    })
    .catch(e => {
      response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador')
    })
})

module.exports = router
