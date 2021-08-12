const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const prefix = "@";
const token = 'TOKEN HERE';

client.on("ready", () => {
  console.log(`dm bot is alive and listing in on port 3000 enjoy your stay`)
  console.log(`Prefix : ${prefix}`)
});


client.on("message", message => {

  if (message.content.startsWith(prefix + 'dm')) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply('you cant use this bot')
    }
    else {
      message.delete
      args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');

      message.guild.members.cache.forEach(member => {
        member.send(argresult).then(console.log(`[+] messages have been sent to | ${member.user.username}#${member.user.discriminator}`)).catch(e => console.error(`[-] user may not have dm's enabled | ${member.user.username}#${member.user.discriminator}`));
      })
      console.log(`[/] done.`)
      message.channel.send(`:white_check_mark: | **messages have been sent**`).then(message.delete({ timeout: 15000 }));
    }
  }

})
client.login('TOKEN HERE');
