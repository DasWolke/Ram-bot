module.exports = {
    help: 'Plz send help!!',
    func: (Client, msg, args) => {
        if (args.length > 1) {
            if (args[1] in Client.commands && Client.commands[args[1]].help)
                msg.channel.sendCode('asciidoc', `${Client.config.prefix + args[1]} :: ${Client.commands[args[1]].help}`);
        else {	
            let help = "";
            for (var command in Client.commands) {
                help += `${Client.config.prefix + command} :: ${Client.commands[command].help}\n`
            }
            msg.channel.sendCode('asciidoc', help);
        }
    }
}};