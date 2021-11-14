const Discord = require('discord.js')
const chalk = require('chalk');


const config = require("./config/config.js")
const {token, prefix} = config
const log = console.log

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});


client.on('ready', () => {
    log(chalk.blue(`Logged in as ${client.user.tag}!`))
});

client.on('messageCreate', msg => {
    log(msg.content,  chalk.red(msg.author.tag))
    const { author, guild, channel } = msg
    //Check if user is bot
    if(author.bot || !guild){
        return
    }
    //Ignore message  without prefix
    if(!msg.content.startsWith(prefix)) return

    const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g)

    const cmd = args.shift().toLowerCase()

    console.log(cmd)

    if(cmd === "ping"){
      msg.reply("pong")  
    }
    if(cmd === "help"){
        channel.send("Siema")
      }

})

client.login(token)

