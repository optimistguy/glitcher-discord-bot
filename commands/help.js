const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  return message.channel.send("**Glitcher** - A discord bot that glitched with commands \n by JoshTheLogician#1102")
}

module.exports.help = {
  name: "ping"
}
