const discord = require('discord.js')

module.exports = {
	name: "rps",
	description: "play a game of rock, paper and scissors",
	execute: async(message, args, cmd, client, Discord) => {
		let embed = new discord.MessageEmbed()
		.setTitle("Rock Paper Scissors!!")
		.setDescription("React to play!")
		.setTimestamp()
		let msg = await message.channel.send(embed)
		await msg.react("🐚")
		await msg.react("✂")
		await msg.react("📜")

		const filter = (reaction, user) => {
            return ['🐚', '✂', '📜'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🐚', '✂', '📜']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setTitle("RESULTS!")
        		.addField("Your choice", `${reaction.emoji.name}`)
        		.addField("My choice", `${me}`)
			await msg.edit(result)
        		if ((me === "🐚" && reaction.emoji.name === "✂") ||
                (me === "📜" && reaction.emoji.name === "🐚") ||
                (me === "✂" && reaction.emoji.name === "📜")) {
                    message.reply("You lost!");
            } else if (me === reaction.emoji.name) {
                return message.reply("It's a tie!");
            } else {
                return message.reply("You won!");
            }
        })
        .catch(collected => {
                message.reply('Cancelled the game since you didnt choose!');
            })
}
}