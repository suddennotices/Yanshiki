const Discord = require('discord.js');


module.exports = {
    name: 'clear',
    description: 'clear command, used for purge certain amount of messages',
    async execute(message, args, cmd, client, Discord) {
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I don't have the `Manage Messages` permission to execute this command!");

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You need the `MANAGE MESSAGES` permission to execute this command.");

let messageArray = message.content.split(" ");
const amount = parseInt(args[0]) + 1;

if (isNaN(amount)) {
    return message.channel.send(`${message.author.username}, Please input an amount you'd like me to clear. `)
} else if (amount <= 1 || amount > 100) {

    return message.channel.send(`${message.author.username}, you can only clear messages from 1-99`)
}

message.channel.bulkDelete(amount, true)
const embed = new Discord.MessageEmbed()

    .setAuthor(`${amount} messages cleared!`, message.author.avatarURL({ dynamic: true, format: 'png' }))
    .addField("Cleared in:", message.channel)
    .addField("Total Message/s Deleted:", amount)
    .setTimestamp()
    .setFooter(`${client.user.username}`, message.author.avatarURL({ dynamic: true, format: 'png' }))
    
message.channel.bulkDelete(amount);
message.channel.send(embed)
}
}
