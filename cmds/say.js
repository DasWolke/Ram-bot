module.exports = {
    help: "Send a message",
    func: (Client, msg, args) => {
        let comText = args.join(' ');
        msg.channel.sendMessage('\u200B' + comText); //prefix with a Zero Width Space, so other bots will not react to it.
        console.log(`[say]: ${msg.author.username}: ${comText}`)
    }
};