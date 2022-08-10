let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let hellirfaan = fs.readFileSync('./mp3/Bot.opus') 
conn.sendFile(m.chat, hellirfaan, '', '', m, true)
}

handler.customPrefix = /^(bot|robot)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
