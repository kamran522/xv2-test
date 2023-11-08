(async () => {
 
  try{
	switch (command) {
        case 'grp' :{
         if (!isGroup) return reply('Special ⁉️')
     	if (!isBotAdmins) return reply('_*Bot Must Be Admin*_')
     	if (!groupAdmins) return reply('*_Make Me Admin_*')
     	if (q.toLowerCase() === "close") {
     		await Xbot.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`*Successfully Closing The Group*`)).catch((err) => reply(jsonformat(err)))
         } else if (q.toLowerCase() === "open") {
         	await  Xbot.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`*Successfully Opening The Group*`)).catch((err) => reply(jsonformat(err)))
          } else {	
          	 Xbot.sendPoll(m.chat, "Please Select , I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} open`,`${command.charAt(0).toUpperCase()+command.slice(1)} close`])
          }   
      }      
      break   
		case 'closetime':
                if (!m.isGroup) return reply("*_This is a Group Command_*")
                if (!isAdmins && !isCreator) return reply("*_Bot Must Be Admin_*")
                if (!isBotAdmins) return reply("*_Bot Must Be Admin_*")
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    Xbot.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return reply("*_This is a Group Command_*")
                if (!isAdmins && !isCreator) return reply("*_Bot Must Be Admin_*")
                if (!isBotAdmins) return reply("*_Bot Must Be Admin_*")
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    Xbot.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return reply("*_This is a Group Command_*")
                if (!isAdmins && !isGroupOwner && !isCreator) return reply("*_Bot Must Be Admin_*")
                if (!isBotAdmins) return reply("*_Bot Must Be Admin_*")
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Xbot.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'add':
                if (!m.isGroup) return reply("*_This is a Group Command_*")
                if (!isAdmins && !isGroupOwner && !isCreator) return reply("*_Bot Must Be Admin_*")
                if (!isBotAdmins) return reply("*_Bot Must Be Admin_*")
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Xbot.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return reply("*_This is a Group Command_*")
                if (!isAdmins && !isGroupOwner && !isCreator) return reply("*_Bot Must Be Admin_*")
                if (!isBotAdmins) return reply("*_Bot Must Be Admin_*")
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Xbot.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return reply("*_This is a Group Command_*")
                if (!isAdmins && !isGroupOwner && !isCreator) return reply("*_Bot Must Be Admin_*")
                if (!isBotAdmins) return reply("*_Bot Must Be Admin_*")
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Xbot.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'gname':
            case 'setsubject':
                if (!m.isGroup) return reply("*_This is a Group Command_*")
                if (!isAdmins && !isGroupOwner && !isCreator) return reply("*_Bot Must Be Admin_*")
                if (!isBotAdmins) return reply("*_Bot Must Be Admin_*")
                if (!text) return 'Text ?'
                await Xbot.groupUpdateSubject(m.chat, text).then((res) => reply("*_Done_*")).catch((err) => reply(json(err)))
                break
            case 'gdesc':
            case 'setdesk':
                if (!m.isGroup) return reply("*_This is a Group Command_*")
                if (!isAdmins && !isGroupOwner && !isCreator) return reply("*_Bot Must Be Admin_*")
                if (!isBotAdmins) return reply("*_Bot Must Be Admin_*")
                if (!text) return 'Text ?'
                await Xbot.groupUpdateDescription(m.chat, text).then((res) => reply("*_Done_*")).catch((err) => reply(json(err)))
                break
            case 'gpp':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return reply("*_This is a Group Command_*")
                if (!isAdmins) return reply("*_Bot Must Be Admin_*")
                if (!isBotAdmins) return reply("*_Bot Must Be Admin_*")
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await Xbot.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Xbot.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply("*_Done_*")
                } else {
                    var memeg = await Xbot.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply("*_Done_*")
                }
                break
case 'tagall': {
      

 if (!m.isGroup) return replay("*_This is a Group Command_*")
 if (!isAdmins && !isCreator) return replay("*_Bot Must Be Admin_*")
 let teks = `🧩𝗧𝗮𝗴𝗮𝗹𝗹🧩
  
 *Message : ${args.join(" ") ? args.join(" ") : 'no message'}*\n\n`
 for (let mem of participants) {
 teks += `🍭 @${mem.id.split('@')[0]}\n`
 }
 Xbot.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
 }
 break
 
 
            case 'totag':
                if (!m.isGroup) return reply("*_This is a Group Command_*")
                if (!isBotAdmins) return reply("*_Bot Must Be Admin_*")
                if (!isAdmins) return reply("*_Bot Must Be Admin_*")
                if (!m.quoted) return reply(`Reply messages with captions ${prefix + command}`)
                Xbot.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return reply("*_This is a Group Command_*")
                if (!isAdmins && !isGroupOwner && !isCreator) return reply("*_Bot Must Be Admin_*")
                if (!isBotAdmins) return reply("*_Bot Must Be Admin_*")
                if (args[0] === 'close') {
                    await Xbot.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`♠️Success In Closing The Group️`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'open') {
                    await Xbot.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Success In Opening The Group 🕊️`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return reply("*_This is a Group Command_*")
                if (!isAdmins && !isGroupOwner && !isCreator) return reply("*_Bot Must Be Admin_*")
                if (!isBotAdmins) return reply("*_Bot Must Be Admin_*")
                if (args[0] === 'open') {
                    await Xbot.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Group Edit Info 🕊️`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'close') {
                    await Xbot.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Group Edit Info🕊️`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case "gclink":
      case "invite":
        {
                              if (!m.isGroup) return reply("*_This is a Group Command_*")
                  if (!isBotAdmins) return reply("*_Bot Must Be Admin_*")            

          let response = await Xbot.groupInviteCode(m.chat);
          Xbot.sendText(
            m.sender,
            ` 🤖𝐵𝑜𝑡 𝑛𝑎𝑚𝑒:- Xbot Bot\n\n🔖𝐺𝑟𝑜𝑢𝑝 𝑛𝑎𝑚𝑒:- ${groupMetadata.subject}\n\n🔰𝐺𝑟𝑜𝑢𝑝 𝑙𝑖𝑛𝑘:- https://chat.whatsapp.com/${response}`,
            m,
            { detectLink: true }
          );
        }
        await Xbot.sendMessage(m.chat, { video: { url: `https://media.tenor.com/hzWYhzhMTeEAAAPo/Xbot-useless.mp4` }, caption: 'I sent you the Group Link in personal message.\n Pls check.', gifPlayback: true }, { quoted: m });
        break
        
            case 'revoke':
            case 'reset':
                if (!m.isGroup) return reply("*_This is a Group Command_*")
                if (!isAdmins && !isGroupOwner && !isCreator) return reply("*_Bot Must Be Admin_*")
                if (!isBotAdmins) return reply("*_Bot Must Be Admin_*")
                await Xbot.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => reply(json(err)))
                break
          
 
        
            


     
                                
            
            
            
            case 'afk':
                if (!m.isGroup) return reply("*_This is a Group Command_*")
                if (isAfkOn) return reply("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                reply(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break

}
    } catch (e) {
      console.log(e)
   }
})()
                                             