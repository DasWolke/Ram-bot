module.exports = {
    help: "Send a Pong!",
    func: (Client, msg, args) => {
        if (msg.mentions.users.first()) {
            let mentioned = msg.mentions.users.first().avatarURL;
            msg.channel.sendMessage(mentioned);
        } else {
            msg.channel.sendMessage(msg.author.avatarURL);
            let ava = msg.author.avatarURL
        }
    }
};