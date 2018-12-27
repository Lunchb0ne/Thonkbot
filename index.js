//Importing Discord.js and making an instance of the bot with it
const Discord = require("discord.js");
const bot = new Discord.Client();


//Importing token and config
const config = require("./config.js");


//Setting a ready up command!
bot.on("ready", () => {
    console.log("The bot is ready!")
});
//Setting up a prefix for the commands
const prefix = config.prefix;

//Extending hte bot with some message stuff
bot.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;

    if (message.content.startsWith(prefix + "ping") || message.content.startsWith(prefix + "Ping"))
        message.channel.send("pong!");

    if (message.content.startsWith(prefix + "foo"))
        message.channel.send("bar!");
});


//push login token to login to discord
bot.login(config.secret);