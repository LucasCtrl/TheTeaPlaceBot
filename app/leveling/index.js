const User = require('../models/user')

module.exports = async (message) => {
  const userId = message.author.id
  const guildId = message.guild.id
  let userExist = false
  let userData = {}

  // -------------------- Retrieve user --------------------
  const user = await User.get(userId, guildId)
  userExist = user.exists

  if (userExist) userData = user.data()

  // -------------------- Create user --------------------

  if (!userExist) User.create(userId, guildId).then((res) => console.log(res))

  // -------------------- Update user --------------------
}
