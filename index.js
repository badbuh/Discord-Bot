const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log("Siema siemanko");
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.content === 'ping'){
        msg.reply('Pong!');
    }
});

client.login("OTA5NTA3NjI1MDczMzgxNDE3.YZFS-w.63JfsljY1PYCCrLJDYcgxIhZHAw");

