const Discord = require("discord.js");
const config = require("../util/config.json");
const prefix = config.prefix

module.exports = async (client, message) => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  
  if (message.content.indexOf(prefix) !== 0) {
    return;
  }

  try {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    var commandName = args.shift().toLowerCase();

    const command =
      client.commands.get(commandName) ||
      client.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
      );

    if (!command) return
    
    command.execute(client, message, args, prefix)
  
  
  } catch (err) {
    console.log(err);
  } finally {
  
    console.log(
      `${message.author.username}#${message.author.discriminator} ran the command: ${commandName} in ${message.guild.name} `
    ); 
    }
};
