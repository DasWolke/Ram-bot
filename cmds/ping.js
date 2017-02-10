module.exports = {
    help: "Send a Pong!",
    func: (Client, msg, args) => {
        var start = Date.now();
        msg.channel.sendmsg('pong').then(msg => {
            var stop = Date.now();
            var diff = (stop - start);
            msg.edit(`pong\`${diff}ms\``);
        })
    }
};