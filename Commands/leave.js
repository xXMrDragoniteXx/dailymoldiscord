const Discord = require("discord.js");
const ytdl = require("ytdl-core");

exports.run = async (bot, message, args, prefix, music) => {

    message.channel.send("🌺 | Success! I have left the Voice Channel.");

    message.guild.me.voiceChannel.leave();


}