
import {PrismaClient} from '@prisma/client'
import firebase from '../backup/firebase.json'
const prisma = new PrismaClient()
console.log(firebase)
const addGali = async (t:string,message:string) =>{
    // await axios.put(`${process.env.FIREBASE_LINK}/${new Date().getTime()}.json`,{gali:t.substr(8,t.length),author: message.author.username}).then(()=>{
    //     reloadgali().then(()=>{
    //       message.reply(`The gali ${t.substr(8,t.length)} has been added to the dictionary`)
    //     }).catch((e)=>{
    //       console.log(e)
    //     })
    //   }).catch((e)=>{
    //     message.reply(e)
    //   })
}
export default addGali