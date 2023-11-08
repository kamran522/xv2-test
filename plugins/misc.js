(async () => {
 
  try{
	switch (command) {
   
		case 'runtime': {
let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                reply(lowq)
    }

break
      case 'owner': case 'creator': case 'mod': case 'mods': {
      
        Xbot.sendContact(m.chat, config.SUDO, m)
      }

        break
}
    } catch (e) {
      console.log(e)
   }
})()
