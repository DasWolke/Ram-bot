const Cleverbot = require('cleverbot-node');
const clbot = new Cleverbot;

module.exports = {
    help: "Answers to your queston",
    func: (Client, msg, args) => {
        Cleverbot.prepare(() => {
            clbot.write(msg.content, (response) => {
                msg.channel.startTyping();
                setTimeout(() => {
                    msg.channel.sendMessage(response.message).catch(console.error);
                    msg.channel.stopTyping();
                }, Math.random() * (1 - 3) + 1 * 1000);
            });
        })
    }
};