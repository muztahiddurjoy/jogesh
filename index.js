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
    message.reply(`${t.substr(5,t.length)} ${galis[Math.floor(Math.random() * (galis.length - 0))].gali}`)
  }
  else if(t.includes('%welcome')){
    message.reply(`Welcome lodu ${t.substr(8,t.length)}`)
  }
  else if(t.includes('%addgali')){
    axios.put(`https://galibotcord-default-rtdb.firebaseio.com/galis/${new Date().getTime()}.json`,{gali:t.substr(8,t.length),author: message.author.username}).then(()=>{
      message.reply(`The gali ${t.substr(8,t.length)} has been added to the dictionary`)
    }).catch((e)=>{
      message.reply(e)
    })
  }
 /* else if(t.includes("")){

  }*/
});
client.on('messageDelete', (s,d)=>{
//  console.log(client)
  //s.reply(`${s.author.username} Message Delete korle gay!`)
  
})

client.login(process.env.BOT_TOKEN);