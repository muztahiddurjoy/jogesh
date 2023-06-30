"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const firebase_json_1 = __importDefault(require("../backup/firebase.json"));
const prisma = new client_1.PrismaClient();
console.log(firebase_json_1.default);
const addGali = (t, message) => __awaiter(void 0, void 0, void 0, function* () {
    prisma.gali.create({
        data: {
            author: 
        }
    });
    // await axios.put(`${process.env.FIREBASE_LINK}/${new Date().getTime()}.json`,{gali:t.substr(8,t.length),author: message.author.username}).then(()=>{
    //     reloadgali().then(()=>{
    //       message.reply(`The gali ${t.substr(8,t.length)} has been added to the dictionary`)
    //     }).catch((e)=>{
    //       console.log(e)
    //     })
    //   }).catch((e)=>{
    //     message.reply(e)
    //   })
});
exports.default = addGali;
//# sourceMappingURL=addGali.js.map