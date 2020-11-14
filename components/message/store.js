const Model = require('./model')

function addMessage(message) {
  const myMessage = new Model(message)
  myMessage.save()
}

async function getMessage(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {}
    if (filterUser !== null) {
      filter = { user: filterUser }
    }
    Model.find(filter)
      .populate('user')
      .exec((err, populated) => {
        if (err) {
          reject(err)
          return false
        }
        resolve(populated)
      })
  })
}

async function updateMessage(id, message) {
  const foundMessages = await Model.findOne({
    _id: id
  })
  foundMessages.message = message
  const newMessage = await foundMessages.save()
  return newMessage
}

function removeMessage(id) {
  return Model.deleteOne({
    _id: id
  })
}

module.exports = {
  add: addMessage,
  list: getMessage,
  update: updateMessage,
  delete: removeMessage
}
