const { default: axios } = require('axios');
const { Client, Intents, MessageAttachment } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, VoiceConnectionStatus } = require('@discordjs/voice');
const express = require('express')
const client = new Client({intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_MESSAGES]});
const { TextChannel } = require('discord.js')
const fetch = require('node-fetch')
const art = require('ascii-art')
const app = express()
const PORT = process.env.PORT | 300
require('dotenv').config()

//main gali array
let galis = []
//refresh function
const reloadgali = async () =>{
  await axios.get(`${process.env.FIREBASE_LINK}.json`).then((res)=>{
    galis = Object.values(res.data)
  }).catch((e)=>{
    console.log(e)
  })
}
//addgali function
const addgali  = async  (t,message) =>{
  await axios.put(`${process.env.FIREBASE_LINK}/${new Date().getTime()}.json`,{gali:t.substr(8,t.length),author: message.author.username}).then(()=>{
    reloadgali().then(()=>{
      message.reply(`The gali ${t.substr(8,t.length)} has been added to the dictionary`)
    }).catch((e)=>{
      console.log(e)
    })
  }).catch((e)=>{
    message.reply(e)
  })
}
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  reloadgali().catch(e => console.log(e))
});

client.on('messageCreate', async message => {
    const t = message.content;
    
    if(message.author.id === "967660170572341258"){
      message.react("👍")
      // let str = "Hmm"
      // for (let i = 0; i < Math.floor(Math.random()*10); i++) {
      //   str+="m"
      // }
      // message.reply(str)
    }
    if(message.author.id === "967661362132189185"){
      message.react("💕")
      // message.reply("Apo apni cutu💕")
    }
    if(message.content.includes("917045708203380766")){
      if(message.author.id === "544406696563572739"){
        message.channel.send("Ji sir")
      }
      else if(message.author.id === "967661362132189185"){
        message.channel.send("Ji madam")
      }
      else{
      message.channel.send("Kisse")}
    }
    // const channel = client.channels.cache.get('886494812566605846').send(`@qt ${galis[Math.floor(Math.random() * (galis.length - 0))].gali}`);
    //console.log(channel)
    //gali command
  if(t.includes('%gali')){
    let target = t.substr(5,t.length)
    if(target.toLowerCase().includes("joya") || target.toLowerCase().includes("jobayda")){
      message.reply('Khaiya daiya kaam nai?')
    }
    else if(message.guildId=="1102917645579321415"){
      if(message.author.id=="851753629149167657" || message.author.id=="544406696563572739" || message.author.id=="584309117380853770"){
        message.react('🗿')
        message.channel.send(`${target} ${galis[Math.floor(Math.random() * (galis.length - 0))].gali}`)
      }
      else{
        message.react('🤡')
        message.reply('Shob command shobar jonno na baba')
      }
    }
    else if(target.toLowerCase().includes("durjoy")){
        message.reply(`Hopp beda\n<@!${message.author.id}> ${galis[Math.floor(Math.random() * (galis.length - 0))].gali}`) 
    }
    else if(target.toLowerCase().includes("botjoy")){
      message.reply(`Hopp beda\n<@!${message.author.id}> ${galis[Math.floor(Math.random() * (galis.length - 0))].gali}`) 
    }
    else if(target.includes('দুর্জয়')){
      message.reply(`Hopp beda\n<@!${message.author.id}> ${galis[Math.floor(Math.random() * (galis.length - 0))].gali}`) 
    }
    else if(target.toLowerCase().includes("muztahid")){
      message.reply(`Hopp beda\n<@!${message.author.id}> ${galis[Math.floor(Math.random() * (galis.length - 0))].gali}`) 
    }
    else if (target.toLowerCase().includes('<@!917045708203380766>')){
      message.reply(`Hopp beda\n<@!${message.author.id}> ${galis[Math.floor(Math.random() * (galis.length - 0))].gali}`) 
    }
    else if( target.toLowerCase().includes('<@!544406696563572739>')){
      message.reply(`Hopp beda\n<@!${message.author.id}> ${galis[Math.floor(Math.random() * (galis.length - 0))].gali}`) 
    }
    else{
        message.react('🐄')
        message.channel.send(`${target} ${galis[Math.floor(Math.random() * (galis.length - 0))].gali}`)
    }
  }

  if(t.includes('%moan')){
    const voiceChannel = message.member?.voice.channel;
    if (!voiceChannel) {
      return message.reply('You need to be in a voice channel to use this command!');
    }
    // Join the voice channel
    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    });

    // Play a sound
    const player = createAudioPlayer();
    const resource = createAudioResource(`${__dirname}/assets/audio/moan.mp3`);
    connection.subscribe(player);
    player.play(resource);

    // Handle errors and cleanup
    player.on('idle', () => {
      connection.destroy();
    });
    connection.on('disconnect', () => {
      player.stop();
    });
  }
  if(t.includes('%moan wafi')){
    const voiceChannel = message.member?.voice.channel;
    if (!voiceChannel) {
      return message.reply('You need to be in a voice channel to use this command!');
    }
    // Join the voice channel
    const player = createAudioPlayer();
    const moan1 = createAudioResource(`${__dirname}/assets/audio/wafi1.mp3`);
    const moan2 = createAudioResource(`${__dirname}/assets/audio/wafi2.mp3`);
    const moan3 = createAudioResource(`${__dirname}/assets/audio/wafi3.mp3`);
    const moan4 = createAudioResource(`${__dirname}/assets/audio/wafi4.mp3`);
    const moan5 = createAudioResource(`${__dirname}/assets/audio/wafi5.mp3`);
    const moan6 = createAudioResource(`${__dirname}/assets/audio/wafi6.mp3`);
   
    const moans = [moan1,moan2,moan3,moan4,moan5,moan6]
    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    });

    // Play a sound
    
    connection.subscribe(player);
    player.play(moans[Math.floor(Math.random() * (moans.length - 0))]);

    // Handle errors and cleanup
    player.on('idle', () => {
      connection.destroy();
    });
    connection.on('disconnect', () => {
      player.stop();
    });
  }

  //welcome command
  else if(t.includes('%welcome')){
    message.reply(`গালির রাজ্যে আপনাকে স্বাগতম${t.substr(8,t.length)}`)
  }


  //tornado command
  else if(t.includes('%tornado')){
    if(message.author.discriminator == '8573' || message.author.id == "851753629149167657" || message.author.id == "858605545266348052"){
      galis.map((v,i)=>{
        message.reply(`${t.substr(8,t.length)} ${v.gali}`)
      })
    }
 
    // else if(message.author.discriminator = '5291'){
    //   galis.map((v,i)=>{
    //     message.reply(`${t.substr(8,t.length)} ${v.gali}`)
    //   })
    // }
    else{
      message.reply('shob command shobar jonno na baba')
    }
  }

  //addgali command
  else if(t.includes('%addgali')){ 
    addgali(t,message).catch((e)=>{
      //console.log(e)
    })
  }
  //semi tornado command
  else if(t.includes('%fixed')){
    if(message.author.id == '544406696563572739' || message.author.discriminator == '5291'){
      for (let i = 0; i < t.substring(6,8); i++) {
          message.reply(`${t.substring(8,t.length)} ${galis[Math.floor(Math.random() * (galis.length - 0))].gali}`)
      }
    }
    else{
        message.reply('tor baaper chakor ami?')
    }
  }
  
  //meme send command
  // else if(t.includes('%meme')){
  // axios.get('https://meme-api.herokuapp.com/gimme').then(res =>{
  //   const attach = new MessageAttachment(res.data.url);
  //   message.reply('hi',{files : ['https://i.redd.it/x313u10ie4581.gif']})
  //  }).catch(e =>{
  //     console.log(e)
  //  })
  // }

  
  //gaali amount command
  else if(t.includes('%amount')){
    message.reply(`total: ${galis.length} gali(s)`)
  } 
  else if(t.includes("%command1")){
    const arr = ["J","O","Y","A","C","U","T","U"]
    arr.map((v,i)=>{
      art.font(v, 'doom')
      .then(async (rendered)=>{
        const channelid = message.channelId
        await client.channels.cache.get(channelid.toString()).send(`\`\`\`${rendered}\`\`\``)
      }).catch((err)=>{
          //err is an error
      });
    })
  }
  else if(t.includes('jogesh init')){
    const arr = ["Togo","Mare","Chudi"]
    arr.map((v,i)=>{
      art.font(v, 'doom')
      .then((rendered)=>{
        const channelid = message.channelId
        client.channels.cache.get(channelid.toString()).send(`\`\`\`${rendered}\`\`\``)
      }).catch((err)=>{
          //err is an error
      });
    })
    
  }
});

app.get('/',(req,res)=>{
  res.status(200).json({suck:'Saxxx'})
})


client.login(process.env.BOT_TOKEN);
app.listen(PORT,()=> console.log('Server started🔥'))

