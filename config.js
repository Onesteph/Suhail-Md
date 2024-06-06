const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_12_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzLFxuICAgICAgICA5LFxuICAgICAgICA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDgzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDU2LFxuICAgICAgICA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDczLFxuICAgICAgICAxODIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg5LFxuICAgICAgICA4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY1LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxLFxuICAgICAgICA0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg3LFxuICAgICAgICA0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2LFxuICAgICAgICA4MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjksXG4gICAgICAgIDMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitwRXoySjBudGVWcHhhKzc5RTNzQWEyRitkRU1FTjRhdGZ3aUhMemU3OEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFlQzhYenZSVFlHMUJudXhyRVZ0YUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDk2YzcxZGQtZTQzYi00YWMzLWIxMzQtNjYxMTBhNTc3OTFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDIwOSxcbiAgICAgIDIxNixcbiAgICAgIDE1MSxcbiAgICAgIDc5LFxuICAgICAgMTAsXG4gICAgICAyMjcsXG4gICAgICAyNDYsXG4gICAgICA0MSxcbiAgICAgIDkwLFxuICAgICAgMTk5LFxuICAgICAgNDMsXG4gICAgICAxNTEsXG4gICAgICA0NyxcbiAgICAgIDEsXG4gICAgICA0NixcbiAgICAgIDU1LFxuICAgICAgMTc1LFxuICAgICAgMjAxLFxuICAgICAgMTcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OSxcbiAgICAgIDEwOSxcbiAgICAgIDMyLFxuICAgICAgMjAzLFxuICAgICAgNCxcbiAgICAgIDE1NCxcbiAgICAgIDI0NixcbiAgICAgIDEwNixcbiAgICAgIDE1MixcbiAgICAgIDc0LFxuICAgICAgMixcbiAgICAgIDYwLFxuICAgICAgMTE1LFxuICAgICAgMTU1LFxuICAgICAgOTUsXG4gICAgICAxMTcsXG4gICAgICAxNyxcbiAgICAgIDI2LFxuICAgICAgOTcsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOTGVrQVlROHBhR3N3WVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkluNkdMb1dGR3hMcVFacUpVR05waWkrcE12emxScDNxem9jTkhJam9oUkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibVljRWIzN1lBOVFueWllMWhVRkR4S0JtZklCR2JnMytzOVVieWE1UkR2bHkzWE05WFNBWVcrL0EwQlBNWndxbDlJNmIvWUQwWngwV1h0eXZMZGY0aVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTXJBNml3Z0hQSEozdkN5QlJKekVUaWJ1UXFDR28yMFZOeGpWa0Myc3JWanlqT3ExY0hlWFRsbklveXFYYmo2WTZhdzRNYURrRFpOLy82WDZKRi9qQXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDUxMDgwODI0OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDEzOTE0NTI3MzM1NTU6MzVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDUxMDgwODI0OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzY2ODcyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUg5eVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSDl5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibGZsSjRCREYzZW9lSXRaOUFQanVaSWpTMVg2SFdOd2ZvdGRTSzBKV0xqZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjg1NzE3MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3NjI0ODc1NzExXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
