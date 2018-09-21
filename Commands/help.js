const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {

    let embed = new Discord.RichEmbed()
    .setColor("#b1ffa5")
    .setTitle("🌺 Commands 🌺")
    .setDescription(`__**Utility**__\n\n${prefix}socialmedia \nShows all of Daily Mol's Social Media.\n\n${prefix}inspiration\nShows you a image that should inspire you in your drawings\n\n\n__**Music**__\n\n${prefix}play [Song Name]\nPlays the selected song.\n\n${prefix}skip\nSkips the current song.\n\n${prefix}leave\nLeaves the Voice Channel.\n\n${prefix}queue\nGets you the queue.\n\n${prefix}loop [On | Off]\nLoops the playing song.`)
    message.channel.send(embed)

}