module.exports = {
    help: "Send a message and delete your message",
    func: (Client, msg, args) => {
        msg.delete();
        msg.channel.sendMessage(comText);
        console.log(`[sayd]: ${msg.author.username}: ${comText}`)
    }
};