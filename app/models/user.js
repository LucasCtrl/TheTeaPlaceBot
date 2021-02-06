const { db } = require('../db')

const create = async (userId, guildId, callback) => {
  const data = {
    engagement: {
      level: 0,
      message: 0,
      xp: 0,
    },
  }

  await db.collection('users').doc(`${guildId}:${userId}`).set(data)
  return `${guildId}:${userId} created`
}

const get = async (userId, guildId) => {
  const res = await db.collection('users').doc(`${guildId}:${userId}`).get()
  return res
}

module.exports = { get, create }
