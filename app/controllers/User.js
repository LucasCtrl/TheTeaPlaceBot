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
 * Update a value on a specific user
 * @param id - User id in the database
 * @param {String} key - Key to update
 * @param {Number} value - Updated value
 */
const updateUser = async (id, key, value) => {
  const response = await User.updateOne(
    { _id: id },
    {
      $set: { [key]: value },
    }
  )
  return response
}

/**
 * Increment a value on a specific user
 * @param id - User id in the database
 * @param {String} key - Key to increment
 * @param {Number} value - Amount to increment
 */
const incrementUser = async (id, key, value) => {
  const response = await User.updateOne(
    { _id: id },
    {
      $inc: { [key]: value },
    }
  )
  return response
}

const deleteUser = async () => {}

module.exports = { getAllUsers, getUser, createUser, updateUser, incrementUser, deleteUser }
