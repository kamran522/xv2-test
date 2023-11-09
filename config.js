const fs = require('fs')
const chalk = require('chalk')

module.exports = {
SESSION_ID: process.env.SESSION_ID || 'X-BOT-MD:ProwlingPlagued',
SUDO: process.env.SUDO || '923323963788',
BOT_INFO: process.env.BOT_INFO ||'X-BOT-MD-V2;K A M I',
STICKER_DATA: process.env.STICKER_DATA || `X-BOT-MD;K A M I`,
PREFIX: process.env.PREFIX || '.',
MENTION: 'https://i.imgur.com/SBWolI2.mp4' ,
MENTION_DATA: 'X-BOT-MD;MULTI-DEVICE BOT BY TEAM EX-BOT-Z;https://wa.me/917012984396;https://i.imgur.com/3cMVKBk.jpeg' ,
AUTO_STATUS_VIEW: true,
AUTOBIO: false,
AUTO_READ: false,
AUTO_TYPING: false,
AUTO_RECORDING: false,
CAPTION: 'X-BOT-MD',
DB_URL: '',
}
