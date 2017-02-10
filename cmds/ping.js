module.exports = {
    help: "Send a Pong!",
    func: (Client, msg, args) => {
        let start = Date.now();
        msg.channel.sendMessage('pong').then(msg => {
            let stop = Date.now();
            let diff = (stop - start);
            msg.edit(`pong \`${diff}ms\``);
        })
    }
};