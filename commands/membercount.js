const discord = require('discord.js')
module.exports = { 
    name: "membercount",
    description: "shows a member count!",
    execute: async(message, args, cmd, client, Discord) => {
        const countembed = new Discord.MessageEmbed()
        .setTitle(`${message.guild.name} has ${message.guild.memberCount} members!`)
        message.channel.send(countembed)
    }   

}
