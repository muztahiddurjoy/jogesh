
import {PrismaClient} from '@prisma/client'
import { Message } from 'discord.js'
const prisma = new PrismaClient()

const addGali = (t:string,message:Message<boolean>) =>{

    prisma.gali.create({
        data:{
            author: message.author.username,
            discriminator: +message.author.discriminator,
            gali: t.substring(8,t.length),
            photo: message.author.avatarURL({format:'jpeg'}) || '',
        }
    }).then(()=>{
        message.reply(`The gali ${t.substring(8,t.length)} has been added to the dictionary`)
    }).catch((err)=>{
        console.log(err)
        message.reply('Sorry bro! try again')
    })
}
export default addGali