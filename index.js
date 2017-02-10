// [let] can get reassigned value while [const] keeps the same value
// File system reader
const Discord = require('discord.js');
const fs = require('fs');
let Client = {
    config: require('./config/config.json'),
    bot: new Discord.Client()
};

Client.bot.on('ready', () => {
    console.log('I am ready');
});

Client.load = (command) => {
    let commandsList = fs.readdirSync('./cmds/');
    if (command) {
        if (commandsList.indexOf(`${command}`) >= 0) {
            delete require.cache[require.resolve(`./cmds/${command}`)];
            Client.commands[command] = require(`./commands/${command}`);
        }
    } else {
        Client.commands = {};
        for (i = 0; i < commandsList.length; i++) {
            let item = commandsList[i];
            if (item.match(/\.js$/)) {
                delete require.cache[require.resolve(`./cmds/${item}`)];
                Client.commands[item.slice(0, -3)] = require(`./cmds/${item}`);

                // for testing
                //console.log(item)
            }
        }
    }
};
Client.load();

Client.bot.on('message', (msg) => {
    // Skipping the whole bot check and selfbot check cuz you should know how to do it right now
    if (msg.author.bot) return;
    if (msg.content.startsWith(Client.config.prefix)) {
        let cmd = msg.content.substring(Client.config.prefix.length).split(' ')[0];
        let args = msg.content.substring(Client.config.prefix.length).split(' ').splice(1);
        console.log(`args:${args}`);
        if (cmd in Client.commands) {
            Client.commands[cmd].func(Client, msg, args);
        }
    } // else if (msg.isMentioned(Client.bot.user.id)) {
    //     console.log("mentioned");
    //     args = msg.content.slice(Client.bot.user.id).split(' ');
    //     comText = (msg.content.split(' ').slice(1)).join(' ');
    //     console.log(`args:${args}`)
    //     console.log(`comText:${comText}`)
    //     if (args[0] in Client.commands) {
    //         Client.commands[args[0]].func(Client, msg, args);
    //     }
    // }
});

// for testing
console.log(Client.commands);

Client.bot.login(Client.config.token);