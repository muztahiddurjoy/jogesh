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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var discord_js_1 = require("discord.js");
var _a = require('@discordjs/voice'), joinVoiceChannel = _a.joinVoiceChannel, createAudioPlayer = _a.createAudioPlayer, createAudioResource = _a.createAudioResource, AudioPlayerStatus = _a.AudioPlayerStatus, VoiceConnectionStatus = _a.VoiceConnectionStatus;
var express_1 = require("express");
var ascii_art_1 = require("ascii-art");
var client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_VOICE_STATES, discord_js_1.Intents.FLAGS.GUILD_MESSAGES] });
var TextChannel = require('discord.js').TextChannel;
var app = (0, express_1.default)();
var PORT = process.env.PORT | 300;
require('dotenv').config();
//main gali array
var galis = [];
//refresh function
var reloadgali = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.get("".concat(process.env.FIREBASE_LINK, ".json")).then(function (res) {
                    galis = Object.values(res.data);
                }).catch(function (e) {
                    console.log(e);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
//addgali function
var addgali = function (t, message) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.put("".concat(process.env.FIREBASE_LINK, "/").concat(new Date().getTime(), ".json"), { gali: t.substr(8, t.length), author: message.author.username }).then(function () {
                    reloadgali().then(function () {
                        message.reply("The gali ".concat(t.substr(8, t.length), " has been added to the dictionary"));
                    }).catch(function (e) {
                        console.log(e);
                    });
                }).catch(function (e) {
                    message.reply(e);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
client.once('ready', function () {
    console.log("Logged in as ".concat(client.user.tag, "!"));
    reloadgali().catch(function (e) { return console.log(e); });
});
client.on('messageCreate', function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var t, target, voiceChannel, connection_1, player_1, resource, voiceChannel, player_2, moan1, moan2, moan3, moan4, moan5, moan6, moans, connection_2, i, arr, arr;
    var _a, _b;
    return __generator(this, function (_c) {
        t = message.content;
        if (message.author.id === "967660170572341258") {
            message.react("👍");
            // let str = "Hmm"
            // for (let i = 0; i < Math.floor(Math.random()*10); i++) {
            //   str+="m"
            // }
            // message.reply(str)
        }
        if (message.author.id === "967661362132189185") {
            message.react("💕");
            // message.reply("Apo apni cutu💕")
        }
        if (message.content.includes("917045708203380766")) {
            if (message.author.id === "544406696563572739") {
                message.channel.send("Ji sir");
            }
            else if (message.author.id === "967661362132189185") {
                message.channel.send("Ji madam");
            }
            else {
                message.channel.send("Kisse");
            }
        }
        // const channel = client.channels.cache.get('886494812566605846').send(`@qt ${galis[Math.floor(Math.random() * (galis.length - 0))].gali}`);
        //console.log(channel)
        //gali command
        if (t.includes('%gali')) {
            target = t.substr(5, t.length);
            if (target.toLowerCase().includes("joya") || target.toLowerCase().includes("jobayda")) {
                message.reply('Khaiya daiya kaam nai?');
            }
            else if (message.guildId == "1102917645579321415") {
                if (message.author.id == "851753629149167657" || message.author.id == "544406696563572739" || message.author.id == "584309117380853770") {
                    message.react('🗿');
                    message.channel.send("".concat(target, " ").concat(galis[Math.floor(Math.random() * (galis.length - 0))].gali));
                }
                else {
                    message.react('🤡');
                    message.reply('Shob command shobar jonno na baba');
                }
            }
            else if (target.toLowerCase().includes("durjoy")) {
                message.reply("Hopp beda\n<@!".concat(message.author.id, "> ").concat(galis[Math.floor(Math.random() * (galis.length - 0))].gali));
            }
            else if (target.toLowerCase().includes("botjoy")) {
                message.reply("Hopp beda\n<@!".concat(message.author.id, "> ").concat(galis[Math.floor(Math.random() * (galis.length - 0))].gali));
            }
            else if (target.includes('দুর্জয়')) {
                message.reply("Hopp beda\n<@!".concat(message.author.id, "> ").concat(galis[Math.floor(Math.random() * (galis.length - 0))].gali));
            }
            else if (target.toLowerCase().includes("muztahid")) {
                message.reply("Hopp beda\n<@!".concat(message.author.id, "> ").concat(galis[Math.floor(Math.random() * (galis.length - 0))].gali));
            }
            else if (target.toLowerCase().includes('<@!917045708203380766>')) {
                message.reply("Hopp beda\n<@!".concat(message.author.id, "> ").concat(galis[Math.floor(Math.random() * (galis.length - 0))].gali));
            }
            else if (target.toLowerCase().includes('<@!544406696563572739>')) {
                message.reply("Hopp beda\n<@!".concat(message.author.id, "> ").concat(galis[Math.floor(Math.random() * (galis.length - 0))].gali));
            }
            else {
                message.react('🐄');
                message.channel.send("".concat(target, " ").concat(galis[Math.floor(Math.random() * (galis.length - 0))].gali));
            }
        }
        if (t.includes('%moan')) {
            voiceChannel = (_a = message.member) === null || _a === void 0 ? void 0 : _a.voice.channel;
            if (!voiceChannel) {
                return [2 /*return*/, message.reply('You need to be in a voice channel to use this command!')];
            }
            connection_1 = joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: voiceChannel.guild.id,
                adapterCreator: voiceChannel.guild.voiceAdapterCreator,
            });
            player_1 = createAudioPlayer();
            resource = createAudioResource("".concat(__dirname, "/assets/audio/moan.mp3"));
            connection_1.subscribe(player_1);
            player_1.play(resource);
            // Handle errors and cleanup
            player_1.on('idle', function () {
                connection_1.destroy();
            });
            connection_1.on('disconnect', function () {
                player_1.stop();
            });
        }
        if (t.includes('%moan wafi')) {
            voiceChannel = (_b = message.member) === null || _b === void 0 ? void 0 : _b.voice.channel;
            if (!voiceChannel) {
                return [2 /*return*/, message.reply('You need to be in a voice channel to use this command!')];
            }
            player_2 = createAudioPlayer();
            moan1 = createAudioResource("".concat(__dirname, "/assets/audio/wafi1.mp3"));
            moan2 = createAudioResource("".concat(__dirname, "/assets/audio/wafi2.mp3"));
            moan3 = createAudioResource("".concat(__dirname, "/assets/audio/wafi3.mp3"));
            moan4 = createAudioResource("".concat(__dirname, "/assets/audio/wafi4.mp3"));
            moan5 = createAudioResource("".concat(__dirname, "/assets/audio/wafi5.mp3"));
            moan6 = createAudioResource("".concat(__dirname, "/assets/audio/wafi6.mp3"));
            moans = [moan1, moan2, moan3, moan4, moan5, moan6];
            connection_2 = joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: voiceChannel.guild.id,
                adapterCreator: voiceChannel.guild.voiceAdapterCreator,
            });
            // Play a sound
            connection_2.subscribe(player_2);
            player_2.play(moans[Math.floor(Math.random() * (moans.length - 0))]);
            // Handle errors and cleanup
            player_2.on('idle', function () {
                connection_2.destroy();
            });
            connection_2.on('disconnect', function () {
                player_2.stop();
            });
        }
        //welcome command
        else if (t.includes('%welcome')) {
            message.reply("\u0997\u09BE\u09B2\u09BF\u09B0 \u09B0\u09BE\u099C\u09CD\u09AF\u09C7 \u0986\u09AA\u09A8\u09BE\u0995\u09C7 \u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE".concat(t.substr(8, t.length)));
        }
        //tornado command
        else if (t.includes('%tornado')) {
            if (message.author.discriminator == '8573' || message.author.id == "851753629149167657" || message.author.id == "858605545266348052") {
                galis.map(function (v, i) {
                    message.reply("".concat(t.substr(8, t.length), " ").concat(v.gali));
                });
            }
            // else if(message.author.discriminator = '5291'){
            //   galis.map((v,i)=>{
            //     message.reply(`${t.substr(8,t.length)} ${v.gali}`)
            //   })
            // }
            else {
                message.reply('shob command shobar jonno na baba');
            }
        }
        //addgali command
        else if (t.includes('%addgali')) {
            addgali(t, message).catch(function (e) {
                //console.log(e)
            });
        }
        //semi tornado command
        else if (t.includes('%fixed')) {
            if (message.author.id == '544406696563572739' || message.author.discriminator == '5291') {
                for (i = 0; i < t.substring(6, 8); i++) {
                    message.reply("".concat(t.substring(8, t.length), " ").concat(galis[Math.floor(Math.random() * (galis.length - 0))].gali));
                }
            }
            else {
                message.reply('tor baaper chakor ami?');
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
        else if (t.includes('%amount')) {
            message.reply("total: ".concat(galis.length, " gali(s)"));
        }
        else if (t.includes("%command1")) {
            arr = ["J", "O", "Y", "A", "C", "U", "T", "U"];
            arr.map(function (v, i) {
                ascii_art_1.default.font(v, 'doom')
                    .then(function (rendered) { return __awaiter(void 0, void 0, void 0, function () {
                    var channelid;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                channelid = message.channelId;
                                return [4 /*yield*/, client.channels.cache.get(channelid.toString()).send("```".concat(rendered, "```"))];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }).catch(function (err) {
                    //err is an error
                });
            });
        }
        else if (t.includes('jogesh init')) {
            arr = ["Togo", "Mare", "Chudi"];
            arr.map(function (v, i) {
                ascii_art_1.default.font(v, 'doom')
                    .then(function (rendered) {
                    var channelid = message.channelId;
                    client.channels.cache.get(channelid.toString()).send("```".concat(rendered, "```"));
                }).catch(function (err) {
                    //err is an error
                });
            });
        }
        return [2 /*return*/];
    });
}); });
app.get('/', function (req, res) {
    res.status(200).json({ suck: 'Saxxx' });
});
client.login(process.env.BOT_TOKEN);
app.listen(PORT, function () { return console.log('Server started🔥'); });
