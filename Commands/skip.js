const Discord = require("discord.js");
const ytdl = require("ytdl-core");

exports.run = async (bot, message, args, prefix, music) => {

    message.channel.send("🌺 | Skipped the current song.");

    music.loop=0

    music.dispatcher.end();


}