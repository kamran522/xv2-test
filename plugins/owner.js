(async () => {
 
  try{
    //
    //
	switch (command) {
        case 'join':
            try {
                if (!isCreator) return reply("*_This Command Is For The Owner_*")
                if (!text) return reply('Enter Group Link!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                reply("*_Please Wait..._*")
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Xbot.groupAcceptInvite(result).then((res) => reply(json(res))).catch((err) => reply(json(err)))
            } catch {
                reply('Failed to join the Group')
            }
            break 
            case 'setexif':
                if (!isCreator) return reply("*_This Command Is For The Owner_*")
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                config.packname = text.split("|")[0]
                config.author = text.split("|")[1]
                reply(`Exif successfully changed to\n\n• Packname : ${config.packname}\n• Author : ${config.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return reply("*_This Command Is For The Owner_*")
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
                            to: botNumber,
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
                    var memeg = await Xbot.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply("*_Done_*")
                }
                break
            case 'block':
                if (!isCreator) return reply("*_This Command Is For The Owner_*")
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Xbot.updateBlockStatus(blockw, 'block').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'unblock':
                if (!isCreator) return reply("*_This Command Is For The Owner_*")
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Xbot.updateBlockStatus(blockww, 'unblock').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'leave':
                if (!isCreator) return reply("*_This Command Is For The Owner_*")
                if (!m.isGroup) return reply("*_This is a Group Command_*")
                reply('🟨Bye Everyone 🥺')
                await Xbot.groupLeave(m.chat)
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return reply("*_This Command Is For The Owner_*")
                if (!text) return reply(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await Xbot.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    Xbot.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg',
                                sourceUrl: config.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!isCreator) return reply("*_This Command Is For The Owner_*")
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("AyushBug3.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                reply(`${getCase(q)}`)
                break
            case 'delete':
            case 'del': {
                if (!isCreator) return reply("*_Done_*")
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return reply('The message was not sent by a bot!')
                Xbot.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

}
    } catch (e) {
      console.log(e)
   }
})()
                            