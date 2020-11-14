const express = require('express')
const app = express()
const server = require('http').Server(app)

const bodyParse = require('body-parser')
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')

db('mongodb://db_user_platzivideos:platzivideo123@cluster0-shard-00-00-vmb31.mongodb.net:27017,cluster0-shard-00-01-vmb31.mongodb.net:27017/db_telegram?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true')
// const router = require('./components/message/network')

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }))
// app.use(router)

socket.connect(server)

router(app)

app.use('/app', express.static('public'))

server.listen(3000, function () {
  console.log('La aplicacion esta escuchando en el http://localhost:3000')
})
