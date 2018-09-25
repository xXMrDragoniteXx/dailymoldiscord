const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix) => {

if(!message.member.voiceChannel) return message.channel.send(":x: | Sorry! Please join a Voice Channel.");

if(radio === "100hit") {

    message.channel.send(":white_check_mark: | Connected to 100 HIT radio.");

    message.member.voiceChannel.join().then(conn => {
        require('http').get("http://streaming.radionomy.com/100-HIT-radio", (res) => {
            conn.playArbitraryInput(res);
    
        });
    })

}




}