(async () => {
 
  try{
    const {
      BOT_INFO,
      PREFIX
    } = require('./config')
	switch (command) {
            case 'menu':
            case 'help':
            case 'alive':
            case 'm':
            let mono = '```'
                let endi = `
*Bot name : ${BOT_INFO.split(";")[0]}*
*User* : *${pushname}*
*Prefix : ${PREFIX}*
*Owner : ${BOT_INFO.split(";")[1]}*
*Time : ${xtime}*
*Date : ${xdate}*
*Uptime : ${runtime(process.uptime())}*
${readmore}
┏━━━▷ Owner ◁━━━┓
┃▸ shutdown 
┃▸ restart
┃▸ fullpp
┃▸ Block
┃▸ Unblock 
┃▸ mode *self/public*
┃▸ autotyping *on/off*
┃▸ autoread *on/off*
┃▸ autorecording *on/off*
┃▸ autobio *on/off*
┃▸ autostatusview *on/off*
┗━━━━━━━━━━━━━━━┛

┏━━━▷ Downloader ◁━━┓
┃▸ insta
┃▸ mediafire
┃▸ Apk
┃▸ Song
┃▸ play
┃▸ fb
┃▸ gdrive
┗━━━━━━━━━━━━━━━━━━┛

┏━━━▷ Converter ◁━━━┓
┃▸ sticker
┃▸ wave
┃▸ toqr
┃▸ toonce
┃▸ emojimix
┃▸ url
┃▸ gif
┃▸ mp3
┃▸ mp4
┃▸ photo
┃▸ take
┃▸ smeme
┗━━━━━━━━━━━━━━━┛

┏━━━▷ Group ◁━━━┓
┃▸ kick
┃▸ add
┃▸ promote 
┃▸ demote
┃▸ reset
┃▸ invite
┃▸ hidetag
┃▸ tagall
┃▸ listonline
┃▸ group open/close
┃▸ editinfo
┃▸ gname
┃▸ gdesc
┃▸ gpp
┃▸ afk
┗━━━━━━━━━━━━━━━┛`
await Xbot.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: '80000000',
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: tiny(endi),
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {quoted :m })
break
//status sender
case 'snt' : case 'snd' : case 'giv' : case 'gs' : case 'snt' : case 'ayak' : case 'thada' : case 'tha' : case 'sd' :  case 'st' : case 'ayak myre' : case 'znt' : case 'save' :case 'send' :  {
let a= await m.quoted.download()
let mm = await require('file-type').fromBuffer(a)
return await Xbot.sendMessage(m.chat, {[mm.mime.split('/')[0]]:a});
     }
break         
                
}
    } catch (e) {
      console.log(e)
   }
})()
