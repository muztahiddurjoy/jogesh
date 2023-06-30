import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function storeData(jsonData: Record<string, any>) {
  for (const key in jsonData.galis) {
    const { author, gali } = jsonData.galis[key];
    await prisma.gali.create({
      data:{
        author,
        gali,
        discriminator:0,
        photo:''
      }
    })
  }
}

const jsonData = {
    "galis": {
      "1638811804548": {
        "author": "Muztahid Durjoy",
        "gali": " notirpola"
      },
      "1638813305263": {
        "author": "Muztahid Durjoy",
        "gali": " khankir pola"
      },
      "1638813360011": {
        "author": "Muztahid Durjoy",
        "gali": " chudirbhai"
      },
      "1638813379354": {
        "author": "Muztahid Durjoy",
        "gali": " madarchod"
      },
      "1638813391648": {
        "author": "Muztahid Durjoy",
        "gali": " goruchoda"
      },
      "1638813403974": {
        "author": "Muztahid Durjoy",
        "gali": " barachoda"
      },
      "1638813424259": {
        "author": "Muztahid Durjoy",
        "gali": " abalchoda"
      },
      "1638813474171": {
        "author": "Muztahid Durjoy",
        "gali": " bainchod"
      },
      "1638813487970": {
        "author": "Muztahid Durjoy",
        "gali": " shomokamichoda"
      },
      "1638816236160": {
        "author": "Muztahid Durjoy",
        "gali": " chutmarani"
      },
      "1638817302582": {
        "author": "Muztahid Durjoy",
        "gali": " maheechoda"
      },
      "1638817326852": {
        "author": "Ajlan",
        "gali": " KhakimageeChudirBhai"
      },
      "1638853833447": {
        "author": "Muztahid Durjoy",
        "gali": " মদনাচোদা"
      },
      "1638869237075": {
        "author": "Muztahid Durjoy",
        "gali": " chutmaranir pola"
      },
      "1638869249913": {
        "author": "Muztahid Durjoy",
        "gali": " vokchod"
      },
      "1638869259376": {
        "author": "Muztahid Durjoy",
        "gali": " vuskichoda"
      },
      "1638869267169": {
        "author": "Muztahid Durjoy",
        "gali": " sodanir pola"
      },
      "1638869289859": {
        "author": "Muztahid Durjoy",
        "gali": " tor mayere sudi"
      },
      "1638869330781": {
        "author": "Muztahid Durjoy",
        "gali": " tor putki dia tor dhon kaita dhukay dimu"
      },
      "1638869339941": {
        "author": "Muztahid Durjoy",
        "gali": " nipple choda"
      },
      "1638869350756": {
        "author": "Muztahid Durjoy",
        "gali": " borhanchoda"
      },
      "1638869379068": {
        "author": "Muztahid Durjoy",
        "gali": " tor mayerebap"
      },
      "1638869397663": {
        "author": "Muztahid Durjoy",
        "gali": " lawrachoda"
      },
      "1638869409565": {
        "author": "Muztahid Durjoy",
        "gali": " vuskichoda"
      },
      "1638869430588": {
        "author": "Muztahid Durjoy",
        "gali": " tor nanir putki shoi"
      },
      "1638870356053": {
        "author": "Muztahid Durjoy",
        "gali": " chodna"
      },
      "1638870373743": {
        "author": "Shaheed",
        "gali": " khankimagi"
      },
      "1638871485405": {
        "author": "Muztahid Durjoy",
        "gali": " nunuchatuni"
      },
      "1638873583446": {
        "author": "Muztahid Durjoy",
        "gali": " vudai"
      },
      "1638888887626": {
        "author": "Muztahid Durjoy",
        "gali": " narkichoda"
      },
      "1638974439350": {
        "author": "Muztahid Durjoy",
        "gali": " natkichoda"
      },
      "1639199130697": {
        "author": "OrphanDestroyer5000",
        "gali": " Dinosaur Choda"
      },
      "1639223650115": {
        "author": "Muztahid Durjoy",
        "gali": " achoda"
      },
      "1639224671203": {
        "author": "Muztahid Durjoy",
        "gali": " ukunchoda"
      },
      "1639232240165": {
        "author": "H69NYKOPOT",
        "gali": " Gay Lussac"
      },
      "1639232280891": {
        "author": "H69NYKOPOT",
        "gali": " pussy"
      },
      "1639232293278": {
        "author": "H69NYKOPOT",
        "gali": " motherfucker bastard"
      },
      "1639232314295": {
        "author": "H69NYKOPOT",
        "gali": " gay"
      },
      "1639232342324": {
        "author": "H69NYKOPOT",
        "gali": " asshole"
      },
      "1639232379709": {
        "author": "H69NYKOPOT",
        "gali": " magir put"
      },
      "1639232400499": {
        "author": "H69NYKOPOT",
        "gali": " mongachoda"
      },
      "1639232422554": {
        "author": "H69NYKOPOT",
        "gali": " borishailla matari"
      },
      "1639232434757": {
        "author": "H69NYKOPOT",
        "gali": " kuttasoda"
      },
      "1639232487354": {
        "author": "H69NYKOPOT",
        "gali": " r modhu bessha"
      },
      "1639250581235": {
        "author": "Muztahid Durjoy",
        "gali": " খানকি"
      },
      "1639250592689": {
        "author": "Muztahid Durjoy",
        "gali": " মাগী"
      },
      "1639250608949": {
        "author": "Muztahid Durjoy",
        "gali": " বেশ্যা"
      },
      "1639250622578": {
        "author": "Muztahid Durjoy",
        "gali": " বারোভাতারি"
      },
      "1639250643151": {
        "author": "Muztahid Durjoy",
        "gali": " কুত্তার বাচ্চা"
      },
      "1639250654844": {
        "author": "Muztahid Durjoy",
        "gali": " ভুস্কিমাগী"
      },
      "1639250665282": {
        "author": "Muztahid Durjoy",
        "gali": " ভোঁদাই"
      },
      "1639250676438": {
        "author": "Muztahid Durjoy",
        "gali": " কুত্তাচোদা"
      },
      "1639250700044": {
        "author": "Muztahid Durjoy",
        "gali": " পাগলাচোদা"
      },
      "1639250723657": {
        "author": "Muztahid Durjoy",
        "gali": " গরিলাচোদা"
      },
      "1639250733606": {
        "author": "Muztahid Durjoy",
        "gali": " পাকিস্তানী ছোটদুধ"
      },
      "1639250744433": {
        "author": "Muztahid Durjoy",
        "gali": " বোটাছিড়া"
      },
      "1639250754245": {
        "author": "Muztahid Durjoy",
        "gali": " আফ্রিকান চোদা"
      },
      "1639250766769": {
        "author": "Muztahid Durjoy",
        "gali": " ইন্ডিয়ান গরুচোদা"
      },
      "1639250779048": {
        "author": "Muztahid Durjoy",
        "gali": " বালখোর"
      },
      "1639250794057": {
        "author": "Muztahid Durjoy",
        "gali": " অক্ষম নারী"
      },
      "1639250804171": {
        "author": "Muztahid Durjoy",
        "gali": " হাউয়ার নাতি"
      },
      "1639250845922": {
        "author": "Muztahid Durjoy",
        "gali": " ল্যাওড়াচোদা"
      },
      "1639251054213": {
        "author": "Muztahid Durjoy",
        "gali": " পুটকিমারা"
      },
      "1639251064979": {
        "author": "Muztahid Durjoy",
        "gali": " খানকির বেটি"
      },
      "1639251074330": {
        "author": "Muztahid Durjoy",
        "gali": " জারজ পোয়াতি"
      },
      "1639251085458": {
        "author": "Muztahid Durjoy",
        "gali": " সমকামী মাগী"
      },
      "1639251131707": {
        "author": "Muztahid Durjoy",
        "gali": " বাপচোদা"
      },
      "1639251148236": {
        "author": "Muztahid Durjoy",
        "gali": " গ্যাংব্যাং নটি"
      },
      "1639251156662": {
        "author": "Muztahid Durjoy",
        "gali": " নটির মাইয়া"
      },
      "1639251165563": {
        "author": "Muztahid Durjoy",
        "gali": " কুকুরশাবক"
      },
      "1639251176901": {
        "author": "Muztahid Durjoy",
        "gali": " ডিল্ডোচোদা"
      },
      "1639251188570": {
        "author": "Muztahid Durjoy",
        "gali": " গুদেতামা"
      },
      "1639251201367": {
        "author": "Muztahid Durjoy",
        "gali": " ল্যাওড়াচোষনী"
      },
      "1639251214519": {
        "author": "Muztahid Durjoy",
        "gali": " ঘাউড়াচোদা"
      },
      "1639251252617": {
        "author": "Muztahid Durjoy",
        "gali": " ডাইনোসরচোদা"
      },
      "1639251261928": {
        "author": "Muztahid Durjoy",
        "gali": " গুন্ডাচোদা"
      },
      "1639251274176": {
        "author": "Muztahid Durjoy",
        "gali": " আবালচোদা"
      },
      "1639251285585": {
        "author": "Muztahid Durjoy",
        "gali": " ডগিস্টাইলচোদা"
      },
      "1639251295749": {
        "author": "Muztahid Durjoy",
        "gali": " আঙুলচোদা"
      },
      "1639251365643": {
        "author": "Muztahid Durjoy",
        "gali": " কলমচোদা"
      },
      "1639251376594": {
        "author": "Muztahid Durjoy",
        "gali": " বেগুনচোদা"
      },
      "1639251389284": {
        "author": "Muztahid Durjoy",
        "gali": " মাঙ্গের মাইয়া"
      },
      "1639251425048": {
        "author": "Muztahid Durjoy",
        "gali": " উপ্তাচোদা"
      },
      "1639251434040": {
        "author": "Muztahid Durjoy",
        "gali": " চোদনা নাতি"
      },
      "1639251451528": {
        "author": "Muztahid Durjoy",
        "gali": " নাইল্যাওড়া"
      },
      "1639251468332": {
        "author": "Muztahid Durjoy",
        "gali": " গর্তে আমের বোটা"
      },
      "1639251478524": {
        "author": "Muztahid Durjoy",
        "gali": " বোরহানচোদা"
      },
      "1639251497163": {
        "author": "Muztahid Durjoy",
        "gali": " হাঙ্গাচোদা"
      },
      "1639251517800": {
        "author": "Muztahid Durjoy",
        "gali": " Barochoda"
      },
      "1639251558350": {
        "author": "Muztahid Durjoy",
        "gali": " bichi choda"
      },
      "1639271898976": {
        "author": "H69NYKOPOT",
        "gali": " চদু পোলা"
      },
      "1639271922213": {
        "author": "H69NYKOPOT",
        "gali": " chodna"
      },
      "1639271932950": {
        "author": "H69NYKOPOT",
        "gali": " modonchoda"
      },
      "1639329243997": {
        "author": "Shaheed",
        "gali": "shutkichoda putkimarani"
      },
      "1639329268065": {
        "author": "Shaheed",
        "gali": "bodnamukhi kamlachoda"
      },
      "1639336694378": {
        "author": "H69NYKOPOT",
        "gali": " ekta hogar bal"
      },
      "1639336739231": {
        "author": "H69NYKOPOT",
        "gali": " bichir bal"
      },
      "1639336849474": {
        "author": "H69NYKOPOT",
        "gali": " উকুনচোদা"
      },
      "1639336876881": {
        "author": "H69NYKOPOT",
        "gali": " পিরিওড কবি"
      },
      "1639336928899": {
        "author": "H69NYKOPOT",
        "gali": " motherfucking simp"
      },
      "1639336988046": {
        "author": "H69NYKOPOT",
        "gali": " জাউরা"
      },
      "1639337153205": {
        "author": "H69NYKOPOT",
        "gali": " মাউরাচোদা"
      },
      "1639337170526": {
        "author": "muztahid",
        "gali": "bodna chor"
      },
      "1639337229288": {
        "author": "H69NYKOPOT",
        "gali": " madari"
      },
      "1639337258891": {
        "author": "OrphanDestroyer5000",
        "gali": " ondho choda"
      },
      "1639337282770": {
        "author": "H69NYKOPOT",
        "gali": " glass dildo choda"
      },
      "1639337289376": {
        "author": "H69NYKOPOT",
        "gali": " BDSM"
      },
      "1639337350838": {
        "author": "OrphanDestroyer5000",
        "gali": " Prostitute choda"
      },
      "1639337379512": {
        "author": "H69NYKOPOT",
        "gali": " হিজরাচোদা"
      },
      "1639337486407": {
        "author": "H69NYKOPOT",
        "gali": " Ear fucker normie"
      },
      "1639337496383": {
        "author": "H69NYKOPOT",
        "gali": " nose fucker normie"
      },
      "1639337515971": {
        "author": "OrphanDestroyer5000",
        "gali": " Farm er Murgi"
      },
      "1639337613487": {
        "author": "H69NYKOPOT",
        "gali": " তোর মায়েরেসুদি"
      },
      "1639337662468": {
        "author": "H69NYKOPOT",
        "gali": " কারেন্টভর্তি হোগা"
      },
      "1639337758804": {
        "author": "H69NYKOPOT",
        "gali": " ছোটনুনু"
      },
      "1639337759057": {
        "author": "H69NYKOPOT",
        "gali": " ছোটনুনু"
      },
      "1639337807726": {
        "author": "OrphanDestroyer5000",
        "gali": " notni magee er fut"
      },
      "1639338347511": {
        "author": "muztahid",
        "gali": " paglachoda"
      },
      "1639338354289": {
        "author": "Shaheed",
        "gali": "chaglachoda"
      },
      "1639338386041": {
        "author": "Shaheed",
        "gali": "viqarunnisar maiya"
      },
      "1639346026284": {
        "author": "muztahid",
        "gali": " shuktimagirpola"
      },
      "1639346089349": {
        "author": "Shaheed",
        "gali": "tore maira haddi vainga ghuddi uraiya jei haddi baaki thakbo oiguka tor putki diya abar dhukaiya tor haaddi abar vangum"
      },
      "1639376886527": {
        "author": "muztahid",
        "gali": " বরিশাইল্লা মাগী"
      },
      "1639376968325": {
        "author": "muztahid",
        "gali": " TBL"
      },
      "1639377367290": {
        "author": "muztahid",
        "gali": " dhon kaita putki dia dhukay dimu"
      },
      "1639377442506": {
        "author": "muztahid",
        "gali": " re dhoira voday dhukaay dimu"
      },
      "1639377837704": {
        "author": "muztahid",
        "gali": " bodna chor"
      },
      "1639378096979": {
        "author": "muztahid",
        "gali": " কাউয়াচোদা"
      },
      "1639404981287": {
        "author": "H69NYKOPOT",
        "gali": " বেশ্যা মাগীর পোলা"
      },
      "1639405745347": {
        "author": "H69NYKOPOT",
        "gali": " ধর্ষক"
      },
      "1639462911233": {
        "author": "H69NYKOPOT",
        "gali": " er putki chudi"
      },
      "1639472982157": {
        "author": "muztahid",
        "gali": "চুদিক্স"
      },
      "1639486509137": {
        "author": "muztahid",
        "gali": " Legalchoda"
      },
      "1639504674761": {
        "author": "H69NYKOPOT",
        "gali": " মদনচোদা"
      },
      "1639504685464": {
        "author": "H69NYKOPOT",
        "gali": " চোদনা"
      },
      "1639504788761": {
        "author": "H69NYKOPOT",
        "gali": " হেলিকপ্টারচোদা"
      },
      "1639506867734": {
        "author": "Muztahid Durjoy",
        "gali": "মুরাদচোদা"
      },
      "1639580842693": {
        "author": "Muztahid Durjoy",
        "gali": "পোংটা হুজুর"
      },
      "1639581709089": {
        "author": "Muztahid Durjoy",
        "gali": " bhodai"
      },
      "1639582164798": {
        "author": "OrphanDestroyer5000",
        "gali": " Fiona"
      },
      "1639585775588": {
        "author": "H69NYKOPOT",
        "gali": " kiss my ass"
      },
      "1639585775809": {
        "author": "H69NYKOPOT",
        "gali": " kiss my ass"
      },
      "1639590456792": {
        "author": "𝑻𝒂𝒔𝒏𝒊𝒎 𝑺𝒉𝒂𝒉𝒓𝒊𝒆𝒓 𝑵𝒂𝒗𝒊𝒅",
        "gali": " evchoda"
      },
      "1639590464619": {
        "author": "Muztahid Durjoy",
        "gali": " ovichod er bichi"
      },
      "1639590493022": {
        "author": "𝑻𝒂𝒔𝒏𝒊𝒎 𝑺𝒉𝒂𝒉𝒓𝒊𝒆𝒓 𝑵𝒂𝒗𝒊𝒅",
        "gali": " ranachoda"
      },
      "1639590508128": {
        "author": "𝑻𝒂𝒔𝒏𝒊𝒎 𝑺𝒉𝒂𝒉𝒓𝒊𝒆𝒓 𝑵𝒂𝒗𝒊𝒅",
        "gali": " clubchoda"
      },
      "1639590567818": {
        "author": "𝑻𝒂𝒔𝒏𝒊𝒎 𝑺𝒉𝒂𝒉𝒓𝒊𝒆𝒓 𝑵𝒂𝒗𝒊𝒅",
        "gali": " after effects choda"
      },
      "1639590625752": {
        "author": "𝑻𝒂𝒔𝒏𝒊𝒎 𝑺𝒉𝒂𝒉𝒓𝒊𝒆𝒓 𝑵𝒂𝒗𝒊𝒅",
        "gali": " কোরিয়ান সেন্সরড নুনু"
      },
      "1639600809350": {
        "author": "H69NYKOPOT",
        "gali": " বিচিফাটা ভোকচোদ"
      },
      "1639601352482": {
        "author": "H69NYKOPOT",
        "gali": " ভোদার ফুটা"
      },
      "1639601448617": {
        "author": "H69NYKOPOT",
        "gali": " কচ্ছপচোদা"
      },
      "1639601514060": {
        "author": "H69NYKOPOT",
        "gali": " পেডোফাইল"
      },
      "1639667567303": {
        "author": "Muztahid Durjoy",
        "gali": "নেতিয়ে পড়া নুনু"
      },
      "1639806530496": {
        "author": "GreenGoblin",
        "gali": " Kuakatachoda"
      },
      "1639921357726": {
        "author": "GreenGoblin",
        "gali": " udvashchoda"
      },
      "1640056001527": {
        "author": "Abba",
        "gali": " গীদরচোদা"
      },
      "1640056009653": {
        "author": "Abba",
        "gali": " বান্দির পুত"
      },
      "1640094818183": {
        "author": "GreenGoblin",
        "gali": " chodi"
      },
      "1640195495896": {
        "author": "GreenGoblin",
        "gali": " bouchoda khanki"
      },
      "1640195523166": {
        "author": "Rajorshi",
        "gali": " sadanirfua"
      },
      "1640195539982": {
        "author": "Rajorshi",
        "gali": " sudanirfua"
      },
      "1640195561181": {
        "author": "Rajorshi",
        "gali": " tormarhedakhankirpola"
      },
      "1640195574430": {
        "author": "Black Vizard(F.A) 🎭",
        "gali": " vurichoda"
      },
      "1640195634303": {
        "author": "Rajorshi",
        "gali": " motorcyclechoda"
      },
      "1640195646097": {
        "author": "Rajorshi",
        "gali": " moshachoda"
      },
      "1640195662853": {
        "author": "Rajorshi",
        "gali": " khonikstick"
      },
      "1640195672846": {
        "author": "Black Vizard(F.A) 🎭",
        "gali": " ডিশিসোদা"
      },
      "1640195675122": {
        "author": "Rajorshi",
        "gali": " khankirstick"
      },
      "1640195691984": {
        "author": "Rajorshi",
        "gali": " chodur nati"
      },
      "1640195708887": {
        "author": "Rajorshi",
        "gali": " jamburachoda"
      },
      "1640195721178": {
        "author": "Sayed Sinha",
        "gali": " khankinotir pola"
      },
      "1640195723765": {
        "author": "Rajorshi",
        "gali": " shauar shaua"
      },
      "1640195727215": {
        "author": "Black Vizard(F.A) 🎭",
        "gali": " nunu choto bole baccha hoy na"
      },
      "1640195744021": {
        "author": "Sayed Sinha",
        "gali": " madarisauaa"
      },
      "1640195754205": {
        "author": "Rajorshi",
        "gali": " koster feriwala choda"
      },
      "1640195775898": {
        "author": "Rajorshi",
        "gali": " 1800 putki mara"
      },
      "1640195785477": {
        "author": "Sayed Sinha",
        "gali": " 1800goa deya"
      },
      "1640195803715": {
        "author": "Rajorshi",
        "gali": " chodur heda"
      },
      "1640195826688": {
        "author": "Rajorshi",
        "gali": " sundori meye choda"
      },
      "1640195829149": {
        "author": "Sayed Sinha",
        "gali": " chtiasauaamarani"
      },
      "1640195839949": {
        "author": "Rajorshi",
        "gali": " bts choda"
      },
      "1640195849600": {
        "author": "Sayed Sinha",
        "gali": " miakhalaifa chodo"
      },
      "1640195872814": {
        "author": "Rajorshi",
        "gali": " নিজের নুনু নিজের পুটকিতে চোদা"
      },
      "1640195874974": {
        "author": "Sayed Sinha",
        "gali": " dihanhogamartedey"
      },
      "1640195905104": {
        "author": "Rajorshi",
        "gali": " homongachoda"
      },
      "1640195963647": {
        "author": "Rajorshi",
        "gali": " gang ka choda"
      },
      "1640195971133": {
        "author": "Rajorshi",
        "gali": " anime ka choda"
      },
      "1640196013492": {
        "author": "Rajorshi",
        "gali": " bichi kande"
      },
      "1640196041085": {
        "author": "Sayed Sinha",
        "gali": " bichiless diha"
      },
      "1640196047673": {
        "author": "Rajorshi",
        "gali": " tui oxygen aish tor chonu hodi diyum heda sudanirfua"
      },
      "1640196091303": {
        "author": "Rajorshi",
        "gali": " putki shoi kore futay stick dhukay dibe bot"
      },
      "1640196125767": {
        "author": "Rajorshi",
        "gali": " hmmchoda"
      },
      "1640196131985": {
        "author": "Rajorshi",
        "gali": " biologychoda"
      },
      "1640196133950": {
        "author": "Sayed Sinha",
        "gali": " khankirputchutiami charo"
      },
      "1640196142001": {
        "author": "Rajorshi",
        "gali": " nangrillchoda"
      },
      "1640196169922": {
        "author": "Rajorshi",
        "gali": " taste main best stopmom and everest"
      },
      "1640196202811": {
        "author": "Rajorshi",
        "gali": " johny sins ka choda"
      },
      "1640196221814": {
        "author": "Rajorshi",
        "gali": "  khanike magi"
      },
      "1640196236446": {
        "author": "Sayed Sinha",
        "gali": " sauuamagi"
      },
      "1640196241185": {
        "author": "Rajorshi",
        "gali": " levelupchoda"
      },
      "1640196267153": {
        "author": "Rajorshi",
        "gali": " hardcore gayporn fan"
      },
      "1640196284971": {
        "author": "Rajorshi",
        "gali": " tommahedda haua"
      },
      "1640196301571": {
        "author": "Sayed Sinha",
        "gali": " chotnunu"
      },
      "1640196303900": {
        "author": "Rajorshi",
        "gali": " botjoy ka choda"
      },
      "1640196329336": {
        "author": "Sayed Sinha",
        "gali": " মালশট"
      },
      "1640196335913": {
        "author": "Rajorshi",
        "gali": " gali diyen na ami gay 🙏"
      },
      "1640196350163": {
        "author": "Rajorshi",
        "gali": " mee6 choda"
      },
      "1640196375389": {
        "author": "Rajorshi",
        "gali": " hagukhawa"
      },
      "1640196429278": {
        "author": "Sayed Sinha",
        "gali": " levelchoda dc"
      },
      "1640196453257": {
        "author": "Sayed Sinha",
        "gali": " adminchoda"
      },
      "1640196455461": {
        "author": "Rajorshi",
        "gali": " goavorti hoga"
      },
      "1640196492335": {
        "author": "Sayed Sinha",
        "gali": " স্টেশন এর নটী"
      },
      "1640196510198": {
        "author": "Rajorshi",
        "gali": " গোয়ার বাটা হান্দে দিয়ুম"
      },
      "1640196521732": {
        "author": "Rajorshi",
        "gali": " pon da choda"
      },
      "1640196595945": {
        "author": "Sayed Sinha",
        "gali": " সাউয়ামাগীখাঙ্কি"
      },
      "1640196621665": {
        "author": "Rajorshi",
        "gali": " salmanmuqtadir choda"
      },
      "1640196639777": {
        "author": "Rajorshi",
        "gali": " putkichoda shutkimarani"
      },
      "1640196649332": {
        "author": "Sayed Sinha",
        "gali": " মাদারচোদ সাউয়া"
      },
      "1640196659495": {
        "author": "Rajorshi",
        "gali": " বাল"
      },
      "1640196687679": {
        "author": "Rajorshi",
        "gali": " nunu choto"
      },
      "1640200073038": {
        "author": "Rajorshi",
        "gali": " হুজুরের লুঙ্গির নিচে খেজুর"
      },
      "1640200493053": {
        "author": "GreenGoblin",
        "gali": " teler botol choda"
      },
      "1640200511414": {
        "author": "Rajorshi",
        "gali": " telchoda"
      },
      "1640200615857": {
        "author": "Rajorshi",
        "gali": " khankir beta"
      },
      "1640200632254": {
        "author": "Dihan",
        "gali": "li masuder beta faaahim"
      },
      "1640200994288": {
        "author": "Rajorshi",
        "gali": " taklamurad choda"
      },
      "1640281602802": {
        "author": "Sayed Sinha",
        "gali": " botjoy choda"
      },
      "1640298458951": {
        "author": "Rajorshi",
        "gali": " সামাচোদা"
      },
      "1640360578980": {
        "author": "Rajorshi",
        "gali": " porasunachoda"
      },
      "1640374168645": {
        "author": "Rajorshi",
        "gali": " streamchoda"
      },
      "1640374191374": {
        "author": "Rajorshi",
        "gali": " emglishchoda"
      },
      "1640374192628": {
        "author": "Sayed Sinha",
        "gali": " reseaecchoda"
      },
      "1640374207405": {
        "author": "Sayed Sinha",
        "gali": " bewafa choda"
      },
      "1640374218540": {
        "author": "Rajorshi",
        "gali": " artistchoda"
      },
      "1640374226325": {
        "author": "Sayed Sinha",
        "gali": " galichoda"
      },
      "1640374240521": {
        "author": "Rajorshi",
        "gali": " beefchoda"
      },
      "1640374260009": {
        "author": "Sayed Sinha",
        "gali": " sylhetchoda"
      },
      "1640374269848": {
        "author": "Sayed Sinha",
        "gali": " lalmiachoda"
      },
      "1640374278454": {
        "author": "Rajorshi",
        "gali": " fokirlalmia choda"
      },
      "1640374280651": {
        "author": "Sayed Sinha",
        "gali": " rapperchoda"
      },
      "1640374298713": {
        "author": "Sayed Sinha",
        "gali": " namchoda"
      },
      "1640374314708": {
        "author": "Sayed Sinha",
        "gali": " cringechoda"
      },
      "1640374324878": {
        "author": "Rajorshi",
        "gali": " dhakachoda"
      },
      "1640374341703": {
        "author": "Rajorshi",
        "gali": " groupchoda"
      },
      "1640374347112": {
        "author": "Sayed Sinha",
        "gali": " groupchoda"
      },
      "1640374389969": {
        "author": "Sayed Sinha",
        "gali": " fchoda"
      },
      "1640374424951": {
        "author": "Sayed Sinha",
        "gali": " mindchoda"
      },
      "1640374495702": {
        "author": "Sayed Sinha",
        "gali": " fbchoda"
      },
      "1640374527839": {
        "author": "Rajorshi",
        "gali": " niggachoda"
      },
      "1640374539048": {
        "author": "Sayed Sinha",
        "gali": " ohyeachoda"
      },
      "1640374636586": {
        "author": "Rajorshi",
        "gali": " contactchoda"
      },
      "1640374648166": {
        "author": "Rajorshi",
        "gali": " honeychoda"
      },
      "1640374653441": {
        "author": "Sayed Sinha",
        "gali": " honeychoda"
      },
      "1640374777264": {
        "author": "Rajorshi",
        "gali": " gamchoda"
      },
      "1640374841106": {
        "author": "Rajorshi",
        "gali": " urduchoda"
      },
      "1640374857897": {
        "author": "Rajorshi",
        "gali": " pirippiripchoda"
      },
      "1640375018799": {
        "author": "Rajorshi",
        "gali": " screensharechoda"
      },
      "1640375057107": {
        "author": "Sayed Sinha",
        "gali": " casechoda"
      },
      "1640375101509": {
        "author": "Rajorshi",
        "gali": " uttalbittalchoda"
      },
      "1640377924971": {
        "author": "Rajorshi",
        "gali": " modhuchoda"
      },
      "1644609646323": {
        "author": "muztahiddurjoy",
        "gali": " jailkhanar magi"
      },
      "1644860990013": {
        "author": "Shaheed*",
        "gali": " মোহাম্মাদপুর বাসিন্দা"
      },
      "1644861109554": {
        "author": "Shaheed*",
        "gali": " উত্তর মৌড়াইল"
      },
      "1644861487643": {
        "author": "Shaheed*",
        "gali": "Drake"
      },
      "1645294796256": {
        "author": "Shaheed*",
        "gali": "coochieless bainchod"
      },
      "1645298898273": {
        "author": "ওবায়দুল কাদের",
        "gali": " Billah khanki"
      },
      "1645298921864": {
        "author": "ওবায়দুল কাদের",
        "gali": " billah hira chate"
      },
      "1645331134159": {
        "author": "Sharif Ahmed SIAM",
        "gali": " bithyr vatar"
      },
      "1646289520435": {
        "author": "রাজা বিক্রম চুদিত্য",
        "gali": " Shaheed er bou"
      },
      "1646580021100": {
        "author": "Shaheed*",
        "gali": " ndc vudai"
      },
      "1651308094614": {
        "author": "MogaMan",
        "gali": " খাইষ্টা"
      },
      "1651308140861": {
        "author": "anisha_ontie",
        "gali": " tmrai khelo bai"
      },
      "1651308179743": {
        "author": "JOYA",
        "gali": "   tomrai khelo"
      },
      "1651308199308": {
        "author": "JOYA",
        "gali": " chaira gelam matir prithibi"
      },
      "1651308216140": {
        "author": "JOYA",
        "gali": " morte ja"
      },
      "1651308237099": {
        "author": "JOYA",
        "gali": " moira jaite mon chaitese"
      },
      "1651308259833": {
        "author": "JOYA",
        "gali": " tui ekta bangi"
      },
      "1651308280505": {
        "author": "anisha_ontie",
        "gali": " বাঙ্গির নাতি"
      },
      "1651308294953": {
        "author": "MogaMan",
        "gali": " RFL Bodna"
      },
      "1663138389331": {
        "author": "MogaMan",
        "gali": " Chutkir pola\\"
      },
      "1667485568749": {
        "author": "H0RNYK0P0T69",
        "gali": " ভোটকাচোদা"
      },
      "1667487027581": {
        "author": "H0RNYK0P0T69",
        "gali": " পর্ণস্টারচোদা"
      },
      "1667727225971": {
        "author": "H0RNYK0P0T69",
        "gali": " পাগলাচোদা"
      },
      "1667727327462": {
        "author": "H0RNYK0P0T69",
        "gali": " murukkhosoda madarir pola"
      },
      "1667727392622": {
        "author": "H0RNYK0P0T69",
        "gali": " bustymagirput"
      },
      "1667728815899": {
        "author": "H0RNYK0P0T69",
        "gali": " চোদনার পোলা"
      },
      "1667747732414": {
        "author": "Kopot",
        "gali": " ভোদার মাথা"
      },
      "1667761731327": {
        "author": "Somnus",
        "gali": " telapoka r putki choda"
      },
      "1667761865932": {
        "author": "Kopot",
        "gali": " niharer manboobs choda"
      },
      "1667761914436": {
        "author": "Kopot",
        "gali": " er boure chudi"
      },
      "1667796738866": {
        "author": "Kopot",
        "gali": " gudmarani randichoda"
      },
      "1667796758553": {
        "author": "Kopot",
        "gali": " japanese chotonunu"
      },
      "1667797008987": {
        "author": "Kopot",
        "gali": " শাউয়ার পোলা"
      },
      "1667797024150": {
        "author": "Kopot",
        "gali": " er hogachudi"
      },
      "1667797356359": {
        "author": "Kopot",
        "gali": " tor mayere sudi"
      },
      "1667799648984": {
        "author": "Kopot",
        "gali": " ডলফিনচোদা বাইঞ্চোদ"
      },
      "1667805190028": {
        "author": "Kopot",
        "gali": " গোয়াচাটুনি"
      },
      "1667805213904": {
        "author": "Kopot",
        "gali": " মুরগাচোদা"
      },
      "1667842734657": {
        "author": "Kopot",
        "gali": " তোরে তোর মায়ের ভোদা দিয়া ভইরা তোর মারে তোর নানির হেডা দিয়া হান্দায় দিমু🤟"
      },
      "1667848075775": {
        "author": "Somnus",
        "gali": " shuorchodakhankimagi"
      },
      "1667848113769": {
        "author": "Kopot",
        "gali": " ভুস্কির পোলা পোদমারানি"
      },
      "1667848127200": {
        "author": "Somnus",
        "gali": " khanki magi sudanir po tor hogar rosh tore khaoai dimu"
      },
      "1667848280030": {
        "author": "Somnus",
        "gali": " khacchorchoda madarchod"
      },
      "1667848296065": {
        "author": "Kopot",
        "gali": " motherfucker baatard chudanir pola"
      },
      "1667848371286": {
        "author": "Kopot",
        "gali": " বিচিলেস বাঞ্চোদ"
      },
      "1667848443875": {
        "author": "Somnus",
        "gali": " bicchi kaitta tor bou re khaoai dibo"
      },
      "1667848468962": {
        "author": "Kopot",
        "gali": " বুইড়াচোদা বালপাকনা"
      },
      "1667848509537": {
        "author": "Kopot",
        "gali": " তোর বিচি কাইটা তোর বউয়ের ভোদা দিয়া হান্দায় দিমু"
      },
      "1667848591997": {
        "author": "Kopot",
        "gali": " রে দেখে বাড়া ভুমির সমান্তরালে এসে পড়লো"
      },
      "1667848780087": {
        "author": "Kopot",
        "gali": " বেশ্যামাগী"
      },
      "1667848796191": {
        "author": "Kopot",
        "gali": " পেন্ড্রাইভচোদা"
      },
      "1667849047568": {
        "author": "Kopot",
        "gali": " বন্ধ্যামাগীর পোলা"
      },
      "1667849102174": {
        "author": "Kopot",
        "gali": " arannitachoda"
      },
      "1667907518326": {
        "author": "Kopot",
        "gali": " chudirbhai"
      },
      "1667983186042": {
        "author": "Kopot",
        "gali": " লডুচোদ"
      },
      "1667983215627": {
        "author": "Kopot",
        "gali": " ballsucker"
      },
      "1668008591039": {
        "author": "Kopot",
        "gali": " চোদনার পোলা চোদু"
      },
      "1668009830058": {
        "author": "Kopot",
        "gali": " বোকাচোদা ভুস্কির পোলা"
      },
      "1668017240658": {
        "author": "22201822_Sarna Paul",
        "gali": " নটি মাগির পোলা"
      },
      "1668167545366": {
        "author": "Kopot",
        "gali": " period er roktochusha pervertchoda"
      },
      "1668167700090": {
        "author": "Kopot",
        "gali": " Rendimagir podmaranir dol"
      },
      "1668167718664": {
        "author": "Kopot",
        "gali": " Telapoka chuda khanki magir dol"
      },
      "1668167734822": {
        "author": "Kopot",
        "gali": " Vodar moddhe unkun handai orgasm kor"
      },
      "1668175630144": {
        "author": "Kopot",
        "gali": " er putkite morich doila dimu"
      },
      "1668777577649": {
        "author": "Somnus",
        "gali": " voda diya puktir rosh bair koira dim"
      },
      "1682412550199": {
        "author": "রাজা বিক্রম চুদিত্য",
        "gali": " মশার বাল"
      },
      "1682412573529": {
        "author": "Tashdid Bin Wahid",
        "gali": "হাউয়া চোদা"
      },
      "1682412597623": {
        "author": "Tashdid Bin Wahid",
        "gali": " ভুস্কি চুদি"
      },
      "1682412615304": {
        "author": "Tashdid Bin Wahid",
        "gali": " রোইত্তার পো"
      },
      "1682412647371": {
        "author": "Tashdid Bin Wahid",
        "gali": " বাইন্দা চুষি"
      },
      "1682693432998": {
        "author": "Muzzz",
        "gali": " sefudar magi"
      },
      "1682693468409": {
        "author": "astatine_ifty",
        "gali": " tissue choda"
      }
    }
  
};

storeData(jsonData)
  .then(() => {
    console.log('Data stored successfully.');
  })
  .catch((error) => {
    console.error('Error storing data:', error);
  })
  .finally(() => {
    prisma.$disconnect();
  });

