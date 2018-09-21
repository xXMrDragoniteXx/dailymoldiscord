const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {
    const yt = bot.emojis.find("name", "YouTube");
    const ig = bot.emojis.find("name", "Instagram");

    let Social = new Discord.RichEmbed()
    .setColor("#b1ffa5")
    .setTitle("Social Media")
    .setDescription(`${ig} | [**Daily Mol**](https://www.instagram.com/_daily._.mol_/)\n${yt} | [**Daily Mol**](https://www.youtube.com/channel/UChhJIzaAlYMF2ifp8Pjyftw)`)
    message.channel.send(Social)

}