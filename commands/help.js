const { ReactionCollector } = require('discord.js-collector');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'help',
    async execute(message, args, cmd, client, Discord)  {
        const botMessage = await message.reply('Need help? Here list with all my commands!');
        
        ReactionCollector.paginator({
            botMessage,
            user: message.author,
            pages: [
                
                new MessageEmbed()
                    .setTitle('Moderation')
                    .addField('Kick', 'Kick one member from the server')
                    .addField('Membercount', 'The amount of members inside the current server')
                    .addField('Clear', 'Clear an amount of messages from 1-99!'),
                new MessageEmbed()
                    .setTitle('Util')
                    .addField('Avatar', 'Show a user avatar')
                    .addField('Rps', 'Play rock paper scissors with me!')
                    .addField('Weather', 'See the weather in the input location!')
                    .addField('Anilookup', 'Get information from said anime!'),
                new MessageEmbed()
                    .setTitle('Music')
                    .addField('Play', 'Play a song!')
                    .addField('Skip', 'Skip the current song!')
                    .addField('Stop', 'Stops the song'),
                ],
            collectorOptions: {
                time: 60000
            }
        });
        }
}