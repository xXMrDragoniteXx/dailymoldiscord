const Discord = require("discord.js");
const ytdl = require("ytdl-core");

exports.run = async (bot, message, args, prefix, music) => {

if(!music.queue[0]) return message.channel.send("🌺 | Sorry! There is no queue.");

if(!args[0]) return message.channel.send("🌺 | Sorry! Please specify if you want loop `on` or `off`.");

let choise = args[0].toLowerCase();

if(choise === "on") {
music.loop=1
message.channel.send("🌺 | Loop is now **on**.");
} else 
if(choise === "off") {
    music.loop=0
    message.channel.send("🌺 | Loop is now **off**.");
}


}