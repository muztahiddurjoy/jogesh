import axios,{ResponseType} from 'axios'
import { Gali } from '../types/gali'

const reloadgali = () =>{
    axios.get(`${process.env.FIREBASE_LINK}.json`).then((res)=>{
      return Object.values(res.data)
    }).catch((e)=>{
        console.log(e)
        return []
    })
}
export default reloadgali