module.exports = {
    help: 'Reload the command',
    func: (Client, msg, args) => {
        if (args.length > 1) Client.load(args[1]);
        else Client.load();
    }
}