exports.run = (client, message, args) => {
  if(!client.disabledFunctions.get(message.guild.id).includes("music")) {
	if(message.member.roles.cache.find(role => role.name === "Music Master") || message.member.hasPermission("MANAGE_GUILD")) {
  if(client.dispatcher[message.guild.id]) {
  	client.queue[message.guild.id].shift();
    if(client.queue[message.guild.id][0]) {
    client.playSong(client.queue[message.guild.id][0], message);

  } else {
  message.guild.members.cache.get(client.user.id).voice.channel.leave();
    }
  	message.channel.send({
          embed: {
            color: 0x51c878,
            description: "Skipped.",
            footer: {
              text: `Requested by ${message.author.username}#${message.author.discriminator} (${message.author.id})`,
              icon_url: message.author.displayAvatarURL()
            }
          }
        });
  } else {
    message.channel.send({
          embed: {
            color: 0xc85151,
            description: "I'm not in a VC!",
            footer: {
              text: `Requested by ${message.author.username}#${message.author.discriminator} (${message.author.id})`,
              icon_url: message.author.displayAvatarURL()
            }
          }
        });
  }
} else {
	message.channel.send({
          embed: {
            color: 0xc85151,
            description: "You need Music Master role or `MANAGE_GUILD` permission!",
            footer: {
              text: `Requested by ${message.author.username}#${message.author.discriminator} (${message.author.id})`,
              icon_url: message.author.displayAvatarURL()
            }
          }
        });
}
}
};

exports.category = "Music";
