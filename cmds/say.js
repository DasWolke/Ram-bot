module.exports = {
    help: "Send a message",
    func: (Client, msg, args) => {
        msg.channel.sendMessage(comText);
        console.log(`[say]: ${msg.author.username}: ${comText}`)
    }
};