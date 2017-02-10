module.exports = {
    help: 'Plz send help!!',
    func: (Client, msg, args) => {
        if (args.length > 0) {
            if (args[0] in Client.commands && Client.commands[args[0]].help) {
                msg.channel.sendCode('asciidoc', `${Client.config.prefix + args[0]} :: ${Client.commands[args[0]].help}`);
            }
        } else {
            let help = "";
            for (let command in Client.commands) {
                if (Client.commands.hasOwnProperty(command)) {
                    help += `${Client.config.prefix + command} :: ${Client.commands[command].help}\n`
                }
            }
            msg.channel.sendCode('asciidoc', help);
        }
    }
};