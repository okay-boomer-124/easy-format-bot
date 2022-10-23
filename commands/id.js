module.exports = {
  name: "name",
  desc: "Replies with your discord name",
  async execute(client, message, args) {

  message.channel.send(`You are ${message.author.id}`)



}
}
