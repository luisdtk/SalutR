const { SlashCommandBuilder, EmbedBuilder  } = require('discord.js');

// Inside Command, Event Listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('About SalutR')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Salut', iconURL: 'https://s2.ezgif.com/tmp/ezgif-2f8c570ed68a86.png', url: 'https://discord.js.org' })
	.setDescription('SalutR is a versatile Discord bot designed to assist with moderation, support programmers, and store important information.')
	.addFields(

		{ name: '\u200B', value: '\u200B' },
		{ name: '/codesltr', value: 'Coding tips and guidance on how to dive deeper into development).', inline: true },
		{ name: '/salutr', value: 'Gives detailed information about the bot, eatures and capabilities.', inline: true },
		{ name: '/gitsltr', value: 'Provides types of Git commands, managing repositories efficiently.', inline: true },
	)
	
	.setTimestamp()
	.setFooter({ text: 'Our Salut Creation', iconURL: 'https://s2.ezgif.com/tmp/ezgif-2f8c570ed68a86.png' });



module.exports = {
    data: new SlashCommandBuilder()
        .setName('salutr')
        .setDescription('Replies with SalutR!'),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}

