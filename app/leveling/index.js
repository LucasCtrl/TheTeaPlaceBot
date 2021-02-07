const { db } = require('../db')
const User = require('../models/user')

module.exports = async (message) => {
  const userId = message.author.id
  const guildId = message.guild.id
  let isUserExist = false
  let dbUserId = ''
  let dbUserData = {}

  // -------------------- Test if user exist --------------------
  const search = await User.search(userId, guildId)
  isUserExist = !search.empty

  if (isUserExist) search.forEach((doc) => (dbUserId = doc.id))

  // -------------------- Create user --------------------

  if (!isUserExist) await User.create(userId, guildId).then((res) => (dbUserId = res.id))

  // -------------------- Retrieve user data --------------------
  // const user = await User.get(dbUserId)
  // dbUserData = user.data()

  // -------------------- Update user --------------------
  User.update(dbUserId)
}
