const { KeepAlive } = require("./keep_alive")
const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});


client.on('messageCreate', async message => {
    if(message.content === '!ping') {
      
    let m = await message.channel.send('Ping?');
    m.edit(`📬Pong!\n📨mensaje  : ${m.createdTimestamp - message.createdTimestamp}ms.\n🛡API : ${Math.round(client.ping)}ms`);
   }
});

client.on('messageCreate', async message => {
    if(message.content === '!twich') {
      
    let m = await message.channel.send('twich?');
    m.edit(`twich!\ncanal de : https://www.twitch.tv/sryosho`);
    }
});

client.on('messageCreate', async message => {
    if(message.content === '!tiktok') {
      
    let m = await message.channel.send('tiktok?');
    m.edit(`tiktok!\ncanal de : https://vm.tiktok.com/ZMNRoaCf6/`);
    }
});

client.on('messageCreate', async message => {
    if(message.content === '!twitter') {
      
    let m = await message.channel.send('twitter?');
    m.edit(`twitter!\ncanal de : https://twitter.com/Mr_Yosho_?t=W_QIdWLmAQIyClVG6cknig&s=09`);
    }
});


//ESTADO

const estados = [`Creador staff V7`,'!twich']

client.on('ready', () => {

    setInterval(() => {
        function presence(){
            client.user.setPresence({
                status: 'dnd',
                Activity: {
                  name:estados[Math.floor(Math.random()* estados.length)],
                }
              })
           }
           presence()
         }, 10000);
});


//------

client.login("Tu token");
