const { db } = require('../db')

const getData = async (guildId) => {
  const guild = await db.collection('guilds').doc(guildId).get()

  console.log(guild)
  if (!guild.exists) {
    console.log('No such document!')
  } else {
    console.log('Document data:', guild.data())
  }
}

module.exports = { getData }
