const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId('select')
            .setPlaceholder('No language information selected')
            .addOptions({
                label: 'JavaScript',
                description: 'Get information about JavaScript',
                value: 'javascript',
        },
        {
                label: 'Python',
                description: 'Get information about Python',
                value: 'python',
        },
        {        label: 'C++',
                description: 'Get information about C++',
                value: 'cpp',
        },
        {        label: 'PHP',
                description: 'Get information about PHP',
                value: 'php',
        },
        {        label: 'HTML',
                description: 'Get information about HTML',
                value: 'html',
        }
    )
)

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Access information on any coding technology you want!'),

    async execute(interaction) {
        await interaction.reply({content: "Select the technology you want information about:", components: [row]})
    }
}