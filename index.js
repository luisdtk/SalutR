const { Client, GatewayIntentBits, Events, Collection } = require('discord.js');



// Dotenv Config
const dotenv = require('dotenv');
dotenv.config();  
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;


// Commands Imports
const fs = require('node:fs');
const path = require('node:path');
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));


// Discord Client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});
client.commands = new Collection();


// Command Handler
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}


// Bot Interaction
client.once('ready', () => {
    console.log(`Bot logged as ${client.user.tag}`);
});

client.login(TOKEN);


// Interaction Listener
client.on(Events.InteractionCreate, async interaction =>{
    if (interaction.isStringSelectMenu()) {
        const selected = interaction.values[0];
        if (selected == "javascript") {
            await interaction.reply("JavaScript information: https://developer.mozilla.org/en-US/docs/Web/JavaScript");
        } else if (selected == "python") {
            await interaction.reply("Python information: https://www.python.org/doc/");
        } else if (selected == "cpp") {
            await interaction.reply("C++ information: https://cplusplus.com/doc/tutorial/");
        } else if (selected == "php") {
            await interaction.reply("PHP information: https://www.php.net/docs.php");
        } else if (selected == "html") {
            await interaction.reply("HTML information: https://developer.mozilla.org/en-US/docs/Web/HTML");
        }
    } 

    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName);  
    if (!command) {
        console.error("No command matching was found.")
        return;
    }
    try {  
        await command.execute(interaction)
    } 
    catch (error) {
        console.error(error)
        await interaction.reply("There was an error while executing this command!")
    }
    })