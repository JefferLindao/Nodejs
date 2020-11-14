const express = require('express')
const bodyParse = require('body-parser')

const db = require('./db')

db('mongodb://db_user_platzivideos:platzivideo123@cluster0-shard-00-00-vmb31.mongodb.net:27017,cluster0-shard-00-01-vmb31.mongodb.net:27017/db_telegram?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true')

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
