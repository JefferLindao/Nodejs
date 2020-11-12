const express = require('express')
const router = express.Router()

var app = express()

/* app.use('/', function (req, res) {
  res.send('hola')
}) */

app.use(router)
router.get('/message', function (req, res) {
  res.send('Lista de mensaje')
})

router.post('/message', function (req, res) {
  res.send('Mensaje añadido')
})

router.delete('/message', function (req, res) {
  res.send('Mensaje eliminado')
})

app.listen(3000)
console.log('La aplicacion esta escuchando en el http://localhost:3000')
