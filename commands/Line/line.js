const { Command } = require("../../utils/command/command");
const ee = require(`../../settings/config`).embed;
const tax = require('probot-tax-calculator');
const { MessageEmbed } = require('discord.js')
module.exports = new Command({
  // options
  name: "line",
  description: `get ping of bot`,
  userPermissions: ["ADMINISTRATOR"],
  botPermissions: ["ADMINISTRATOR"],
  category: "Tax",
  cooldown: 10,
  

  // command start
  run: async ({ client, interaction, args, prefix }) => {

let line = "https://cdn.discordapp.com/attachments/963586535888928839/963586552955543602/line-1.jpg"

interaction.followUp({files: [line]})
    
    
  }
})