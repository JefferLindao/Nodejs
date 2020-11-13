const db = require('mongoose')
const Model = require('./model')

db.Promise = global.Promise

db.connect('mongodb://db_user_platzivideos:platzivideo123@cluster0-shard-00-00-vmb31.mongodb.net:27017,cluster0-shard-00-01-vmb31.mongodb.net:27017/db_telegram?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

console.log('[db] Conectada con exito')

function addMessage(message) {
  const myMessage = new Model(message)
  myMessage.save()
}

async function getMessage() {
  const messages = await Model.find()
  return messages
}

module.exports = {
  add: addMessage,
  list: getMessage
  //get
  //update
  //delete
}
