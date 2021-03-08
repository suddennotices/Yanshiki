const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs');
const mongoose = require('mongoose');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();



client.once('ready', () => {
  console.log(`${client.user.username} is now ready in ${client.guilds.cache.size} servers!`);
  
  const activities = [
    { name: `t?help`, type: "LISTENING"},
    { name: `the rain`, type: 'LISTENING' }
  ];

  // Update presence
  client.user.setPresence({ status: 'online', activity: activities[0] });

  let activity = 1;

  // Update activity
  setInterval(() => {
    activities[3] = { name: `${client.users.cache.size} members`, type: 'WATCHING' }; // Update user count
    if (activity > 2) activity = 0;
    client.user.setActivity(activities[activity]);
    activity++;
  }, 10000);
});


['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);

});



client.login('ODE4NTUyMDg1NTIzMjAyMDQ5.YEZuCQ.4mHQX069LXSsZdHn4RDykNIkVoc');


