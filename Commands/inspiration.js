const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {

    let embed = new Discord.RichEmbed()
    .setColor("#b1ffa5")
    .setImage("https://picsum.photos/200/300/?random")
    message.channel.send(embed)
    

}