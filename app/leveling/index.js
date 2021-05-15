const { createUser, getUser, updateUser } = require('../controllers/User')

module.exports = async (message) => {
  const userId = message.author.id
  const guildId = message.guild.id
  let isUserExist = false
  let dbUserData = {}

  // -------------------- Test if user exist --------------------
  await getUser(userId, guildId).then((res) => {
    if (res === null) isUserExist = false
    else {
      isUserExist = true
      dbUserData = res
    }
  })

  // -------------------- Create user --------------------
  if (!isUserExist) await createUser(userId, guildId).then((res) => (dbUserData = res))

  // -------------------- Update user --------------------
  let xpGained = Math.floor(Math.random() * 15) + 10
  let updatedData = {
    experience: dbUserData.experience + xpGained,
    level: 0,
    messages: dbUserData.messages + 1,
  }
  await updateUser(dbUserData._id, updatedData.experience, updatedData.level, updatedData.messages)
}
