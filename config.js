const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/Maccoder3/MAC-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '256705036288'
global.devs = '256705036288';
global.website = 'https://github.com/Maccoder3/MAC-MD' //wa.me/+25000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/8ec95da555e8347af71bd.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'MAC 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'mac' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_IDIZUKU;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0U5clJtZFRxRC9wRnlTS1liVGFBMTNuOGVra2cya1ZCN3RUdGN5ejFHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWRzaitvajhZOXcvVGlMSkpmcDVKNmlGUE44OXFBU2R1ajJYMHhhbkYzaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTlZnNDFMNTBtN2U2M1ZlY0V1ZG0rdDI4SWUxZzRTL2Y4OHV5TmY0VTNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0bmJnbjNrNWIrZkVlc2pqeVEzeHJjR3BFS1JKSHVZNjdwemVQdzU5eERVPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhHbi9ENC9jbkFqZlBGK2tsVjV6alk1V0xaRkJ1R2EwOUNXU0ZwUHVSVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpGY0wrdFNzcFBGTUJpQ0tZdnJ6WHhSY1VrTVNPYk9PZzhlbGR2MjhFamM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYL1NtNkJPTStYR3lsd3BrbTdQWTZaa0J0RmFzVTQ0RHJ1RWJPTDVBY3ozUWF2QkRIcmhTME03QTJrb3htUHpyYkkrWkVZbkxmUjBCYWozaytBU1lCdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI1MiwiYWR2U2VjcmV0S2V5IjoiQWg0aHpZa0xvS2w2Ty9QRXpGaWhreUN0WVhQYU55dTVWSk5xeHlsd2dTYz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNVNITjVkLUdTZGlMYldBTk9PMzJQUSIsInBob25lSWQiOiJiZTM4YTMxNy1mMTk2LTQ4OTgtYTgzNi0wMDdhZTAyOWE3ZjIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDQrY0JhV0hEdVB2RE1JeEhzQW1CMzhwTXFZPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYNjV6N21OV3JVbXY4b1FDY05NMGVXeXpjU0U9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMRHE3cmdERU5yaGw2c0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikk2Yng4VXh1YnpKdS9XczBLemNpMDF2RnFNSGJQTjhtL3BJZ1g5aTF1QlE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlBKMUxxYXlqcWp2TFdVbjRYclp2TGZEQ0NWbjFNTytVNVEwZGNSVDR1VDM1M1IrU21WZUh5WEVmNE80R3B2UTY1TGhlb0ZKcHBYSGlITmhhV0lQMUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzeW5HSDhPci91NGYxWFpyalNobVI3ZWtGbGpGL3Z3UkJpRlVhMHUxUTNnQ0craWc0WEFSL2VXWUlPRE85Mitkd3JJUks2eUpxODhwY2FqaWdHMGtEZz09In0sIm1lIjp7ImlkIjoiOTE5Nzc4MDM1NDk2OjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkdpdDxcXD5Db2RlciJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTk3NzgwMzU0OTY6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU09tOGZGTWJtOHlidjFyTkNzM0l0TmJ4YWpCMnp6Zkp2NlNJRi9ZdGJnVSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMTE3OTYxMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQSUMifQ==,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'mac' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'MAC-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'MAC',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
