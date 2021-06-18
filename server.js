const Discord = require("discord.js")
const client = new Discord.Client()

client.on(`ready`, async () => {
  console.log(`${client.user.tag} sudah online!`)
  client.user.setActivity("Reading HStore")
})

client.on("message", message => {
  if(message.content === "p") {
    return message.channel.send("Jangan 'p' Tod pake command =help ")
  }
})

client.on("message", message => {
  if(message.content === "=help") {
    return message.channel.send("**Ax15 BOT** \nFITUR: \n> =beli \n> =rules \n> =info \n> =event \n> =uptime")
  }
})

client.on("message", message => {
  if(message.content === "=beli") {
    return message.channel.send("**Ax15** \nCara beli : \n> Cara 1: buat ticket dan tag staff \n> Cara 2: Dm Staff")
  }
})

client.on("message", message => {
  if(message.content === "=rules") {
    return message.channel.send("**RULES HSTORE** \n:name_badge: RULES / PERATURAN :name_badge: \n\n◆ ▬▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬▬▬ ◆ \n\n> 1. DILARANG PROMOSI \n\n> 2. DILARANG MENGIRIM FOTO / VIDEO 18++ \n\n> 3. DILARANG MENGHINA AKUN LAIN \n\n> 4. DILARANG ASAL TAG \n\n> 5. DILARANG NGEMIS \n\n> 6. DILARANG SPAM CHAT \n\n> 7. DILARANG BERKATA KASAR \n\n> 8. DILARANG RASIS \n\n> 9. GUNAKAN VOICE DAN CHAT ROOM DENGAN BAIK \n\n> 10. GUNAKAN NICKNAME SEPANTASNYA \n\n> 11. Jangan Coppy List Produk **HSTORE** \n\n◆ ▬▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬▬▬ ◆ \n\n:copyright: HShop 2021")
  }
})

client.on("message", message => {
  if(message.content === "=info") {
    return message.channel.send("No Ingfo")
  }
})

client.on("message", message => {
  if(message.content === "=event") {
    return message.channel.send("> **EVENT HSTORE** \n\n> 3 Invite Teman = YouTube Premium 1 Bulan \n> :copyright: **HSTORE**")
  }
})

client.on("message", message => {
  if(message.content === "=uptime") {
    return message.channel.send("**Ax15 BOT** \nUptime : 100%")
  }
})

client.on("message", message => {
  if(message.content === "=author") {
    return message.channel.send("**Author : HaykalPRO** \nGithub : https://github.com/HorlandoSR/Bot-Discord-HStore")
  }
})

client.login("")
