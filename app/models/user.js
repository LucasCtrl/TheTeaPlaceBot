const { firebase, db } = require('../db')

// Create an user
const create = async (userId, guildId) => {
  const data = {
    level: 0,
    messages: 0,
    experience: 0,
    userId: userId,
    guildId: guildId,
  }

  const res = await db.collection('users').add(data)
  return res
}

// Search an user
const search = async (userId, guildId) => {
  const res = await db.collection('users').where('userId', '==', userId).where('guildId', '==', guildId).get()
  return res
}

// Get an user
const get = async (id) => {
  const res = await db.collection('users').doc(id).get()
  return res
}

// Update an user
const update = async (id) => {
  const res = await db
    .collection('users')
    .doc(id)
    .update({
      messages: firebase.firestore.FieldValue.increment(1),
    })
  return res
}

module.exports = { create, search, get, update }
