//Constants
const Discord = require("discord.js");

//Variables
let bot = new Discord.Client();
let prefix = "!"

//Ready Event
bot.on("ready", () => {
console.log("Ready!");
bot.user.setActivity("Potato Master")
});

let musicStorage = {};

//Message Event
bot.on("message", message => {

    if(!musicStorage[message.guild.id]) musicStorage[message.guild.id] = {
        queue: [],
        songNames: [],
        loop: 0
    }

    let music = musicStorage[message.guild.id];

    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;     
    if(!message.content.startsWith(prefix)) return;


    // Command Handler
    try {

        let commandFile = require(`./Commands/${cmd}.js`);
        commandFile.run(bot, message, args, prefix, music);

    } catch (e) {
        console.log(e.stack); // Use this if thereis a error you cant solve
        //return
    }

});

bot.login(process.env.BOT_TOKEN);