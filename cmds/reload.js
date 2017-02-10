module.exports = {
    help: 'Reload the command',
    func: (Client, msg, args) => {
        if (args.length > 0) {
            Client.load(args[0]);
            msg.channel.sendMessage(`Reloading ${args[0]}`)
        } else {
            Client.load();
            msg.channel.sendMessage(`Reloading all Commands!`)
        }
    }
};