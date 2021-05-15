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

/**
 * Update an user
 * @param {String} id - User id
 * @param {Number} experience - Experience gained
 * @param {Number} level - Level gained
 */
const update = async (id, experience, level) => {
  await db
    .collection('users')
    .doc(id)
    .update({
      messages: firebase.firestore.FieldValue.increment(1),
      experience: firebase.firestore.FieldValue.increment(experience),
      level: firebase.firestore.FieldValue.increment(level),
    })
}

module.exports = { create, search, get, update }
