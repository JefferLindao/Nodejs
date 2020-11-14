const db = require('mongoose')

db.Promise = global.Promise
//'mongodb://db_user_platzivideos:platzivideo123@cluster0-shard-00-00-vmb31.mongodb.net:27017,cluster0-shard-00-01-vmb31.mongodb.net:27017/db_telegram?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true'
async function connect(url) {
  await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('[db] Conectada con exito')
}

module.exports = connect
