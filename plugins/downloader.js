(async () => {
 
  try{
	switch (command) {
            	case 'fb': case  'facebook' : 
if (!teks)return reply(`*_Need fb url!_*`)
 //reply('_*Downloading...*_');
var fb = await fetch(`https://vihangayt.me/download/fb?url=${teks}`);
var fbdl = await fb.json();

Xbot.sendMessage(m.chat, { video :{ url: fbdl.data.download[0] }, caption: `*${fbdl.data.title}*`}, {quoted: m })
      
      
			break
      /*  case 'video' : case 'ytv' : {
        if (!teks) return reply("_*give me url or text*_")    
        Xbot.sendPoll(m.chat, "Please Select the quality you want", [`${prefix}yt360 ${teks }`,`${prefix}yt720 ${teks}`,m])
          } 
         // Xbot.sendMessage(m.chat, { react: { text: key , key: delete.key }})  
        
      break */
            case 'gdrive'  :
if (!teks)return reply(`*_Need  url!_*`)
 //reply('_*Downloading...*_');
var document= await fetch(`https://vihangayt.me/download/gdrive?url=${teks}`);
var zip = await document.json();

Xbot.sendMessage(m.chat, { document :{ url: zip.data.downloadUrl }, fileName: `${zip.data.fileName}` , mimetype: "application/x-zip-compressed" }, {quoted: m })
           break 
            case 'mediafire'  :
if (!teks)return reply(`*_Need  url!_*`)
 //reply('_*Downloading...*_');
var document= await fetch(`https://vihangayt.me/download/mediafire?url=${teks}`);
var zip = await document.json();

Xbot.sendMessage(m.chat, { document :{ url: zip.data.link }, fileName: `${zip.data.name}` , mimetype: "application/zip" }, {quoted: m })
           break 
        case 'apk' : 
            if (!teks)return reply(`*_Need  text!_*`)
 //reply('_*Downloading...*_');
var document= await fetch(`https://vihangayt.me/download/apk?id=${teks}`);
var zip = await document.json();

Xbot.sendMessage(m.chat, { document :{ url: zip.data.dllink }, fileName: `${zip.data.name}` , mimetype: "application/vnd.android.package-archive" }, {quoted: m })
    
			break
	case 'insta': case  'instagram' : 
if (!teks)return reply(`*_Need instagram post url!_*`)
 //reply('_*Downloading...*_');
var ig = await fetch(`https://vihangayt.me/download/instagram?url=${teks}`);
var igdl = await ig.json();
//let type = igdl.data.data[0].type === "video" ? "image" 
if (igdl.data.data[0].type == "video"){
Xbot.sendMessage(m.chat, { video : { url: igdl.data.data[0].url }, caption:CAPTION}, {quoted: m })
}
      if (igdl.data.data[0].type == "image"){
Xbot.sendMessage(m.chat, { image : { url: igdl.data.data[0].url }, caption:CAPTION}, {quoted: m })
      }
      
			break
/*case 'play':  case 'song': {
if (!text) return reply(`Example : ${prefix + command} pari`)
const Ayushplaymp3 = require('./library/lib/ytdl2')

        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await Ayushplaymp3.mp3(anup3k.url)
    
await Xbot.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: false,
    
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break*/
case "ytmp3": case "ytaudio":
const Ayushaudp3 = require('./library/lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !Ayushaudp3.isYTUrl(text)) return reply(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
const audio=await Ayushaudp3.mp3(text)
await Xbot.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: false
    
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const Ayushvidoh = require('./library/lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !Ayushvidoh.isYTUrl(text)) reply(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await Ayushvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await Xbot.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
    
 case 'yt360' : case 'ytv' :
if (!teks)return reply(`*_Need video post url!_*`)
 //reply('_*Downloading...*_');
var ytmp4 = await fetch(`https://vihangayt.me/download/ytmp4?url=${teks}`);
var yt = await ytmp4.json();

Xbot.sendMessage(m.chat, { video :{ url: yt.data.vid_360p }, caption: `*${yt.data.title}*`}, {quoted: m })
            break
       case 'song' : case 'play' :
           if (!teks)return reply(`*_Need text_*`)
 //reply('_*Downloading...*_');
const aud = await (await fetch(`https://api-viper-x.koyeb.app/song?name=${teks}`)).buffer()
      Xbot.sendMessage(m.chat , {audio : aud , mimetype : 'audio/mpeg'} , { quoted : m }) 
      break
   
        		
    case 'yt720' : case 'video' :
            if (!teks) return reply('_*Need video url*_')
            var ytmp4 = await
            fetch(`https://vihangayt.me/download/ytmp4?url=${teks}`)
var yt = await ytmp4.json()
            Xbot.sendMessage(m.chat,{video:{ url: yt.data.vid_720p}, caption : `_*${yt.data.title}*_`}, {quoted : m})
            break
            case 'yta' :
            if (!teks) return Xbot.sendMessage(m.chat, { text : '_*Need yt url*_'} )
            var ytmp3 = await fetch(`https://api.xfarr.com/api/download/ytaudio?apikey=rty68kAvnd&url=${teks}`)
var yt = await ytmp3.json()
            Xbot.sendMessage(m.chat,{ audio :{ url: yt.result.download[0].url }, caption : `_*${yt.result.title}*_`,  mimetype: 'audio/mpeg' , ptt: false } , {quoted : m})
            break
}
    } catch (e) {
      console.log(e)
   }
})()
