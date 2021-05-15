const User = require('../models/user')

/**
 * Get all users
 */
const getAllUsers = async () => {}

/**
 * Get a specific user
 * @param {String} userId - User ID
 * @param {String} guildId - Guild ID
 */
const getUser = async (userId, guildId) => {
  const response = await User.findOne({
    userId: userId,
    guildId: guildId,
  })
  return response
}

/**
 * Create an user
 * @param {String} userId - User ID
 * @param {String} guildId - Guild ID
 */
const createUser = async (userId, guildId) => {
  const response = await User.create({
    experience: 0,
    guildId: guildId,
    level: 0,
    messages: 0,
    userId: userId,
  })
  return response
}

/**
 * Update an user
 * @param id - User id in the database
 * @param {Number} experience - Total experience of the user
 * @param {Number} level - Total level of the user
 * @param {Number} messages - Total messages of the user
 */
const updateUser = async (id, experience, level, messages) => {
  const response = await User.updateOne(
    { _id: id },
    {
      $set: { experience: experience, level: level, messages: messages },
    }
  )
  return response
}

const deleteUser = async () => {}

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser }
