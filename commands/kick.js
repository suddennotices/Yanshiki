const discord = require('discord.js')
module.exports = { 
    name: "kick",
    description: "kicks someone",
    execute: async(message, args, cmd, client, Discord) => {
	  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You don't have the correct permissions to use this command!")
        let target = message.mentions.members.first()

        if(!target) return message.reply("Please mention someone to kick!")

        if(target.id === message.author.id) {
            return message.reply("You cannot kick yourself!")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("Please give a reason this member was kicked!")

        let embed = new discord.MessageEmbed()
        .setTitle("Member kicked!")
        .setColor('cef0ef')
        .addField("User", target.user.tag)
        .addField("Kicked by:", message.author.tag)
        .addField("Reason of kick", `${reason}`)
        await message.channel.send(embed)
        await target.kick(reason)
    }
}