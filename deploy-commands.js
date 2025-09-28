const { REST, Routes } = require('discord.js');


// Dotenv Config
const dotenv = require('dotenv');
dotenv.config();  
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;



// Commands Imports
const fs = require('node:fs');
const path = require('node:path');
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const commands = [];
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

// REST API Instance
const rest = new REST({ version: '10' }).setToken(TOKEN);

// Deploy Commands
(async () => {
    try {
        console.log(`Representing ${commands.length} commands...`);

        // PUT COMMANDS
        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            { body: commands }
        );
        console.log("Successfully reloaded commands!");
    }
    catch (error) {
        console.error(error);    
    }
})()    