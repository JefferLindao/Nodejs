const express = require('express')
const bodyParse = require('body-parser')

// const router = require('./components/message/network')
const router = require('./network/routes')

var app = express()

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }))
// app.use(router)

router(app)

app.use('/app', express.static('public'))
app.listen(3000)
console.log('La aplicacion esta escuchando en el http://localhost:3000')
