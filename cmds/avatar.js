module.exports = {
    help: "Sends the avatar of the mentioned user or yourself!",
    func: (Client, msg, args) => {
        if (msg.mentions.users.first()) {
            let mentioned = msg.mentions.users.first().avatarURL;
            msg.channel.sendMessage(mentioned);
        } else {
            msg.channel.sendMessage(msg.author.avatarURL);
        }
    }
};