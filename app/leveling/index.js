const { createUser, getUser, updateUser, incrementUser } = require('../controllers/User')

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
  // Give random XP between 15 and 25
  let xpGained = Math.floor(Math.random() * 15) + 10
  await incrementUser(dbUserData._id, 'experience', xpGained)
  await incrementUser(dbUserData._id, 'messages', 1)

  // Retrieve user data
  await getUser(userId, guildId).then((res) => (dbUserData = res))

  // Update the level
  const getLevelXP = (n) => parseInt(100 * 1.2 ** n)
  const getLevelFromXP = (xp) => {
    remainingXP = parseInt(xp)
    level = 0
    while (remainingXP >= getLevelXP(level)) {
      remainingXP -= getLevelXP(level)
      level += 1
    }
    return level
  }

  await updateUser(dbUserData._id, 'level', getLevelFromXP(dbUserData.experience))

  if (dbUserData.level != getLevelFromXP(dbUserData.experience)) {
    message.channel.send(`GG <@${userId}>, tu viens de passer au niveau ${getLevelFromXP(dbUserData.experience)} !`)
  }
}
