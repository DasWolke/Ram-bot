module.exports = {
    help: "Send a message and delete your message",
    func: (Client, msg, args) => {
        msg.delete();
        let comText = args.join(' ');
        msg.channel.sendMessage('\u200B' + comText); //prefix with a Zero Width Space, so other bots will not react to it.
        console.log(`[sayd]: ${msg.author.username}: ${comText}`)
    }
};