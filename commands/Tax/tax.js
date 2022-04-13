const { Command } = require("../../utils/command/command");
const ee = require(`../../settings/config`).embed;
const tax = require('probot-tax-calculator');
const { MessageEmbed } = require('discord.js')
module.exports = new Command({
  // options
  name: "tax",
  description: `get ping of bot`,
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES"],
  category: "Tax",
  cooldown: 10,
  options: [
    {
        name: "amount",
        description: "write amount",
        type: "STRING",
        required: true,
    },

    {
      name: "wasit",
      description: "write percent",
      type: "STRING",
      required: true,
    },
],
  // command start
  run: async ({ client, interaction, args, prefix }) => {
const { options } = interaction;


const amount  = options.getString('amount')
const wasit   = options.getString('wasit')
const result  = tax(amount, wasit);


   
       interaction.followUp({embeds: [
       new MessageEmbed()
       .setTitle(`Tax Calculator`)
       .addFields(
         {
         name: "**ضريبة البرو بوت**",
         value: `${result.protax}`,
         inline: false,
       },
       {
         name: "**ضريبة الوسيط**",
         value: `${result.wasitTax}`,
         inline: false, 
       },
       {
         name: "**مجموع الضرائب**",
         value: `${result.tax}`,
         inline: false, 
       },
       {
         name: "**المبلغ اللازم تحويله**",
         value: `${result.all}`,
         inline: false,

       }


       )
       .setFooter(ee.footertext)
       .setColor(ee.color)
    


       ]
      })

  }
})