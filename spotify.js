const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    data: new SlashCommandBuilder()
        .setName('spotify')
        .setDescription('Listen SalutR Playlist!'),

    async execute(interaction) {
        await interaction.reply('https://open.spotify.com/playlist/28UmzW5O4GhVK2Ius9g19E?si=cd1a5896e1c24aff!!')
    }
}
