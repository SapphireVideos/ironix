exports.run = (client, message, args) => {
  if(!client.disabledFunctions.get(message.guild.id).includes("fun")) {
  if(!client.disabledFunctions.get(message.guild.id).includes("animals")) {
    if(!client.disabledFunctions.get(message.guild.id).includes("bird")) {
  const randomR = require("random-puppy");
  const event = randomR("birdpics").then(url => {
    if(url.endsWith(".mp4") == false) {
      const embed = new (require("discord.js")).MessageEmbed()
        .setFooter(
          `Requested by ${message.author.username}#${message.author.discriminator} (${message.author.id})`,
          message.author.displayAvatarURL()
        )
        .setImage(url);
      message.channel.send({ embed });
      return;
    } else {
      message.channel.send(
      "Error. Please try again."
    );
    }
  });
} 
  }
}
};

exports.category = "Fun";