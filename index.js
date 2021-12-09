const { default: axios } = require('axios');
const { Client, Intents } = require('discord.js');
const client = new Client({intents: 4609});
const fetch = require('node-fetch')
require('dotenv').config()

let galis = []
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  axios.get('https://galibotcord-default-rtdb.firebaseio.com/galis.json').then((res)=>{
    galis = Object.values(res.data)
    console.log(galis)
  }).catch((e)=>{
    console.log(e)
  })
});

client.on('messageCreate', message => {
    const t = message.content;
  if(t.includes('%gali')){
    let target = t.substr(5,t.length)
    if(target.toLowerCase().includes("durjoy") || target.toLowerCase().includes("botjoy") || target.toLowerCase().includes('<@!917045708203380766>') || target.toLowerCase().includes('<@!544406696563572739>')){
     message.reply(`Hopp beda\n<@!${message.author.id}> ${galis[Math.floor(Math.random() * (galis.length - 0))].gali}`) 
    }
    else{
      message.reply(`${target} ${galis[Math.floor(Math.random() * (galis.length - 0))].gali}`)
    }
  }
  else if(t.includes('%welcome')){
    message.reply(`Welcome lodu ${t.substr(8,t.length)}`)
  }
  else if(t.includes('%tornado')){
    if(message.author.id == '544406696563572739'){
      galis.map((v,i)=>{
        message.reply(`${t.substr(8,t.length)} ${v.gali}`)
      })
    }
    else{
      message.reply('shob command shobar jonno na baba')
    }
  }
  else if(t.includes('%addgali')){
    axios.put(`https://galibotcord-default-rtdb.firebaseio.com/galis/${new Date().getTime()}.json`,{gali:t.substr(8,t.length),author: message.author.username}).then(()=>{
      message.reply(`The gali ${t.substr(8,t.length)} has been added to the dictionary`)
    }).catch((e)=>{
      message.reply(e)
    })
  }

});

client.login(process.env.BOT_TOKEN);
