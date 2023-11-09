const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const googleTTS = require("google-tts-api");
const fs = require('fs')
const fsx = require('fs-extra')
const {
    SUDO,
  AUTOBIO,
  AUTO_STATUS_VIEW,
    AUTO_READ,
    AUTO_TYPING,
    AUTO_RECORDING,
    MENTION_DATA,
    MENTION
} = require('./config')
const config = require('./config')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./library/lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./library/lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./library/lib/myfunc')
let afk = require("./library/lib/afk");

const { fetchBuffer, buffergif } = require("./library/lib/myfunc2")


//library/database

let _owner = "917012984396"
let owner = "917012984396"
let _afk = JSON.parse(fs.readFileSync('./library/database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./library/database/total-hit-user.json'))

//time

const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "12:00:00"){
var Ayushytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var Ayushytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var Ayushytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var Ayushytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var Ayushytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var Ayushytimewisher = `Good Morning 🌄`
 } 
module.exports = Xbot = async (Xbot, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') ? m.message.templateButtonreplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = config.PREFIX
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await Xbot.decodeJid(Xbot.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const { randomFancy, tiny } = require("@viper-x/fancytext");
        const sender = m.sender
        const text = q = args.join(" ")
        const teks = text ? text : m.quoted && m.quoted.text
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await Xbot.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [SUDO, ..._owner, botNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

      //
      //

      const replay = (teks) => {
                  Xbot.sendMessage(m.chat, { text: teks}, { quoted: m})
              }
      const reply = (teks) => {
          Xbot.sendMessage(m.chat,{text : teks}, {quoted : m})
      }

//group chat msg by Ayush
const xreply = (teks) => {
Xbot.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `${BOT_INFO.split(";")[0]}`,
"body": `${BOT_INFO.split(";")[1]}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": `${config.thumb}` ,
"sourceUrl": `${link}`}}},
{ quoted: m})
}

async function loading () {
var Ayushlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await Xbot.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < Ayushlod.length; i++) {
await Xbot.sendMessage(m.chat, {text: Ayushlod[i], edit: key });
}
}

        if (!Xbot.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        if (config.AUTO_READ) {
            Xbot.readMessages([m.key])
        }
        if (config.AUTO_TYPING) {

        Xbot.sendPresenceUpdate('composing', from)


        }

        if (config.AUTO_RECORDING) {

        Xbot.sendPresenceUpdate('recording', from)

        }


        //bot number online status, available=online, unavailable=offline
        Xbot.sendPresenceUpdate('unavailable', from)

        if (config.autorecordtype) {
        let Ayushrecordin = ['recording','composing']

        let Ayushrecordinfinal = Ayushrecordin[Math.floor(Math.random() * Ayushrecordin.length)]

        Xbot.sendPresenceUpdate(Ayushrecordinfinal, from)

        }
        /*
        if (!Xbot.mention) { if (m.chat) {
var audios = 'https://i.imgur.com/vY8CfI7.mp4'
var logo = config.MENTION_DATA.split(";")[3]
for (any in SUDO)
if (m.text.includes(SUDO[any])) {
const audio = audios[Math.floor(Math.random() * audios.length)]
const Audio = await getBuffer(audio)
let image1 = await getBuffer(logo)
let image2 = await getBuffer(logo)
var res = await toAudio(Audio, 'mp4')
Xbot.sendMessage(m.chat, {
audio: res,
mimetype: 'audio/mpeg',
ptt: true,
waveform: Array.from({length: 30}, () => Math.floor(Math.random() * 100)),
contextInfo: {
        externalAdReply: {
        title: config.MENTION_DATA.split(";")[0],
        body: config.MENTION_DATA.split(";")[1],
        mediaType: 2,
        thumbnail: image2,
        mediaUrl: config.MENTION_DATA.split(";")[2],
        sourceUrl: config.MENTION_DATA.split(";")[2],
        showAdAttribution: true
                }}
                },
                { quoted: m})
}}}
*/

        if (AUTOBIO) {
            Xbot.updateProfileStatus(`Auti-Bio X-BOT-MD ${runtime(process.uptime())} `).catch(_ => _)
        }
        if (m.sender.startsWith('92') && config.anti92 === true) {
            return Xbot.updateBlockStatus(m.sender, 'block')
        }
                if (m.sender.startsWith('212') && config.anti212 === true) {
            return Xbot.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
        displayName: await Xbot.getName(i),/*
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Xbot.getName(i)}\nFN:${await Xbot.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`*/
      })
  }



  //chat counter (console log)
/*        if (m.message && m.isGroup) {

console.log(chalk.redBright(`\n\nGroup Chat:`))
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {

console.log(chalk.redBright(`\n\nPrivate Chat:`))
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }*/

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./library/database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./library/database/total-hit-user.json'))[0].hit_cmd
        }


        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    reply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./library/database/afk-user.json', JSON.stringify(_afk))
                Xbot.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }

/*------ Not allowing  212 and 210 country codes to use bot in DM ---------- */

  const messSenderMain = m.sender;
  const messForm = m.chat;
  if ( !m.isGroup ){
    if (messForm.startsWith("212") || messForm.startsWith("210") ){
      return;
    }
  }

        switch (command) {
           //orders 
           case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return reply("*_This command Is Only For The Owner 🥲_*")
                fs.readdir("./library/auth_info_baileys/", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Deleating junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./library/auth_info_baileys/${file}`)
                    });
                    await sleep(2000)
                    reply("Successfully deleted all the trash in the session folder")
                });
            }
            break      
            case 'session':
                if (!isCreator) return reply("*_This command Is Only For The Owner 🥲_*")
                reply('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./library/auth_info_baileys/creds.json')
                Xbot.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return reply("*_This command Is Only For The Owner 🥲_*")
                reply(`Shutting Down 🥲🙌🏻`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return reply("*_This command Is Only For The Owner 🥲_*")
                reply('In Process....')
                await process.send("reset")
                break
            case 'autoread':
                if (!isCreator) return reply("This command only for the owner 🥲")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    config.AUTO_READ = true
                    reply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    config.AUTO_READ = false
                    reply(`Successfully changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                if (!isCreator) return reply("*_This command Is Only For The Owner 🥲_*")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    config.AUTO_TYPING = true
                    reply(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    config.AUTO_TYPING = false
                    reply(`Successfully changed auto-typing to ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return reply("*_This command Is Only For The Owner 🥲_*")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    config.AUTO_RECORDING = true
                    reply(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    config.AUTO_RECORDING = false
                    reply(`Successfully changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtype':
                if (!isCreator) return reply("*_This command Is Only For The Owner 🥲_*")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    reply(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    reply(`Successfully changed auto recording and typing to ${q}`)
                }
                break
                case 'autostatusview':
                if (!isCreator) return reply("*_This command Is Only For The Owner 🥲_*")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                  config.AUTO_STATUS_VIEW = true
                    reply(`Successfully changed auto status/story view to ${q}`)
                } else if (q === 'off') {
                    config.AUTO_STATUS_VIEW = false
                    reply(`Successfully changed auto status/story view to ${q}`)
                }
                break
            case 'autobio':
                if (!isCreator) return reply("*_This command Is Only For The Owner 🥲_*")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                  config.AUTOBIO = true
                    reply(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                  config.AUTOBIO = false
                    reply(`Successfully Changed AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return reply("This command only for the owner 🥲")
                if (args.length < 1) return reply(`📑 Check out this example: ${config.PREFIX + command} in public/private`)
                if (q == 'public') {
                    Xbot.public = true
                    reply("Sucessfuly Changed Mode To Public 👥")
                } else if (q == 'private') {
                    Xbot.public = false
                    reply("Sucessfuly Changed Mode To Private 👤")
                }
                break

            case 'mention':
                if (!isCreator) return reply("This command only for the owner 🥲")
                if (args.length < 1) return reply(`📑 Check out this example: ${config.PREFIX + command} in on/off`)
                if (q == 'on') {
                    Xbot.mention = true
                    reply("Sucessfuly Changed On")
                } else if (q == 'on') {
                    Xbot.mention = false
                    reply("Sucessfuly Changed Off")
                }
                break

            default:
                /*fs.readdirSync('./plugins').forEach((file) => {
      if (path.extname(file).toLowerCase() == '.js') {
        eval(fs.readFileSync('./plugins/' + file,  'utf8'))
      }
    })*/


                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply("*_This command Is Only For The Owner 🥲_*")

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }
fs.readdirSync('./plugins').forEach((file) => {
      if (path.extname(file).toLowerCase() == '.js') {
        eval(fs.readFileSync('./plugins/' + file,  'utf8'))
      }
    })








   /* } catch (err) {
       console.log(util.format(err))
}
}*/




                if (budy.startsWith('>')) {
                    if (!isCreator) return reply("*_This command Is Only For The Owner 🥲_*")
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return reply("*_This command Is Only For The Owner 🥲_*")
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
        }
    } catch (err) {
        Xbot.sendText(SUDO + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("Socket connection timeout")) return
if (e.includes("item-not-found")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})             
