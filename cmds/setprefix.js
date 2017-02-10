const fs = require('fs')

module.exports = {
    help: "Send a message and delete your message",
    func: (Client, msg, args) => {
        // change the configuration in memory
        Client.config.prefix = comText[0];
        // Now we have to save the file.
        fs.writeFile('./config/config.json', JSON.stringify(Client.config), (err) => {
            if (err) console.error(err);
        });
        console.log(`Prefix has been changed`);
        msg.channel.sendMessage(`Prefix is now changed to ${Client.config.prefix} `)
    }
};