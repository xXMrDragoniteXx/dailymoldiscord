const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const { YTSearcher } = require('ytsearcher');
  const ytsearcher = new YTSearcher({
    key: "AIzaSyChV72AqgUOWab694WT3zdK6EIbY0EGRuc",
    revealkey: true,
  });

exports.run = async (bot, message, args, prefix, music) => {

    if(!music.queue[0]) return message.channel.send("🌺 | Sorry! There is no queue.")

let embed = new Discord.RichEmbed()
.setColor("#b1ffa5")
.setTitle("Server Queue")
.setDescription(music.songNames)
message.channel.send(embed);
}