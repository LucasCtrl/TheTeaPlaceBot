const { MessageEmbed } = require('discord.js')
const { prefix, colors } = require('../../config.json')

module.exports = {
  config: {
    command: 'ping',
    name: 'Ping',
    description: 'Ping du robot',
    usage: `${prefix}ping`,
    displayHelp: false,
  },

  run: async (bot, message, args) => {
    const beforePing = new MessageEmbed().setDescription('Ping...')

    message.channel.send(beforePing).then((m) => {
      let ping = m.createdTimestamp - message.createdTimestamp

      const afterPing = new MessageEmbed().setDescription(
        `Pong! :ping_pong:\nLatence du robot: \`${ping}ms\`, Latence de l'API: \`${Math.round(bot.ws.ping)}ms\``
      )

      m.edit(afterPing)
    })
  },
}
