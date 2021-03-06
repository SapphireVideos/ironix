exports.run = (client, message, args) => {
  if (Array.isArray(client.blocklist.get(message.guild.id)) == false) {
    client.blocklist.set(message.guild.id, []);
  }

  if (message.member.hasPermission("MANAGE_GUILD")) {
    if (client.blocklist.get(message.guild.id).toString() != "") {
      client.blocklist.set(message.guild.id, []);
      message.channel.send({
        embed: {
          color: 0x51c878,
          description: "Blocklist emptied succesfully!",
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
          description: "The blocklist is already empty!",
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
        description:
          "You need ``Manage Guild`` permission for using this command.",
        footer: {
          text: `Requested by ${message.author.username}#${message.author.discriminator} (${message.author.id})`,
          icon_url: message.author.displayAvatarURL()
        }
      }
    });
  }
};

exports.category = "Blocklist";
