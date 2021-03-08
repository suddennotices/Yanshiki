const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")

module.exports = {
name: "anilookup",
description: "Get anime information",
  execute: (message, args, cmd, client, Discord) => {
    
    
    
    if(!args.length) {
      return message.channel.send("Please also include the name of the anime you'd like to search up!")
    }
    //DEFINE OPTIONS
    
    let option = {
      url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`,
      method: `GET`,
      headers: {
        'Content-Type': "application/vnd.api+json",
        'Accept': "application/vnd.api+json"

      },
      json: true
    }
    
    
    message.channel.send(`Please wait while I look for the info of ${args.join(" ")}!`).then(msg => {
      get(option).then(body => {
       try {
        let embed = new MessageEmbed()
        .setTitle(body.data[0].attributes.titles.en)
        .setColor("cef0ef")
        .setDescription(body.data[0].attributes.synopsis)
        .setThumbnail(body.data[0].attributes.posterImage.original)
        .addField("Ratings:", body.data[0].attributes.averageRating)
        .addField("Episodes:", body.data[0].attributes.episodeCount)
        //.setImage(body.data[0].attributes.coverImage.large)
        //try it
        
        
        message.channel.send(embed)
        msg.delete();
        
       } catch (err) {
        msg.delete();
         return message.channel.send("Unable to find this anime!");
       }
        
        
        
      }                 
                       
    )})
    
  }

}