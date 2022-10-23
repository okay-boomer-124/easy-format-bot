const Discord = require("discord.js");


process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});



fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);

  files.forEach(file => {
    if (!file.endsWith(".js")) return;
      const event = require(`./events/${file}`);
      
      let eventName = file.split(".")[0];

      client.on(eventName, event.bind(null, client));
     
      console.log(`Loading event ${eventName}`)

      delete require.cache[require.resolve(`./events/${file}`)];
    });
});

client.login("");
