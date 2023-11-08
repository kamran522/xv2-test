(async () => {
 
  const googleTTS = require('google-tts-api'); 
	switch (command) {
            
        case 'trt'  : {
            if(!q && !m.quoted) return await reply(`*Please Give Me Text. Example: _${prefix}trt en Who are you_*`);
            const translatte = require("translatte");
            let lang = q ? q.split(" ")[0].toLowerCase() : 'en';
            if (!m.quoted)  { text = q.replace( lang , "");  }
            else { text = m.quoted.text; }
            var whole = await translatte(text, { from:"auto",  to: lang , });
            if ("text" in whole) { return await reply(whole.text); }

        }
    

break;
case 'ping' : case 'p' : {
  try{
  const start = new Date().getTime();
    
  let pong = await Xbot.sendMessage(m.chat , { text : "_*ᴄʜᴇᴄᴋɪɴɢ ᴘɪɴɢ...*_" }, { quoted : m })
  const end = new Date().getTime();
    
    Xbot.sendMessage(m.chat , { text : `_*Rᴇꜱᴘᴏɴꜱᴇ ɪɴ*_ _*${end - start}*_ _*ᴍꜱ*_` , edit : pong.key } , { quoted : m })
  
    break
         /*    case 'tts' : {
         
if (!q) return reply('Where is the text?')
            let texttts = q
            const kriz = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return Xbot.sendMessage(m.chat, {
                audio: {
                    url: kriz,
                },
                mimetype: 'audio/mp4',
                ptt: false,
                fileName: `myr.mp3`,
            }, {
                quoted: m,
            })}



            break*/
    
    } catch (e) {
      console.log(e)
  }
  
}
  }
  
})()
