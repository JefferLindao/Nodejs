const Model = require('./model')

function addMessage(user) {
  const myUser = new Model(user)
  return myUser.save()
}

async function getUser(filterUser) {
  let filter = {}
  if (filterUser !== null) {
    filter = { name: filterUser }
  }
  const user = await Model.find(filter)
  return user
}

module.exports = {
  add: addMessage,
  list: getUser
}
