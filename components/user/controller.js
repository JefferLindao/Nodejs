const store = require('./store')

function addUser(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      console.error('[messageController] No hay usuario')
      reject('Los datos son incorrecto')
      return false
    }
    const user = {
      name
    }
    store.add(user)
    resolve(user)
  })
}

function getUser(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser))
  })
}

module.exports = {
  addUser,
  getUser
}
