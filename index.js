(async () => {
    const { Client, Message, Intents, MessageEmbed, Collection, Permissions, MessageActionRow, MessageButton, WebhookClient, GatewayIntentBits, REST, Routes } = require("discord.js");
    const Discord = require("discord.js")
    const config = require('./config.json');
    const path = __dirname;
    const client = new Client({
        intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_PRESENCES,
            Intents.FLAGS.DIRECT_MESSAGES,
            Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
            Intents.FLAGS.GUILD_MEMBERS,
            Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
            Intents.FLAGS.GUILD_WEBHOOKS,
            Intents.FLAGS.GUILD_VOICE_STATES,
            Intents.FLAGS.GUILD_INVITES,
            Intents.FLAGS.GUILD_BANS,
        ],
        partials: ["CHANNEL"]
    });
    
    
    /////////////////////////////EVENTS//////////////////////////////
require('./fast_dashboard.js')(client);
/////////////////////////////EVENTS//////////////////////////////
    

        
await client.login(config.token).then(async() => {
    console.log(`Bot\`a giriş yaptım! || ${client.user.tag}`)
}).catch((err) => {
    console.log('Bot\`a giriş yapamadım! .\nError: ' + err)
});
  
         ////bundpan sonra kod yazamazsın // Yo yazarım
    })()
    ////bundan sonra kod yazamazsın client kapanışı bu async
    
    
    
