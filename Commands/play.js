const Discord = require("discord.js");
const ytdl = require("ytdl-core");
var search = require('youtube-search');
var opts = {
    maxResults: 1,
    key: 'AIzaSyChV72AqgUOWab694WT3zdK6EIbY0EGRuc'
  };

exports.run = async (bot, message, args, prefix, music) => {

     function play(connection, message) {
        
        music.dispatcher = connection.playStream(ytdl(music.queue[0], {filter: 'audioonly'}));

        music.dispatcher.on("end", async function() {
            if(music.loop === 0) {
                music.queue.shift();
                music.songNames.shift();
                }
            if(music.queue[0]) {
                play(connection, message);
                if(music.loop === 0) {
                message.channel.send(`🌺 | Now Playing: **${music.songNames[0]}**`);
                }
                return;
            } else 
            if(!music.queue[0]) {
                message.channel.send("🌺 | Queue ended.");
                message.guild.me.voiceChannel.leave();
            }

        });
    }

if(!message.member.voiceChannel) return message.channel.send("🌺 | Sorry! Please connect to a Voice Channel.");

    let songName = args.join(" ");

if(!songName) return message.channel.send("🌺 | Sorry! Please provide a song name.");

search(args.join(" "), opts, async function(err, results) {
    if(err) return console.log(err);
   
    let resOne = results[0];

    music.queue.push(resOne.link);
    music.songNames.push(resOne.title);

    message.channel.send(`🌺 | Added to queue: **${resOne.title}**`);

    if(!message.guild.voiceConnection) await message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
      });

   
  });
}