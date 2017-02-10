// [let] can get reassigned value while [const] keeps the same value
// File system reader
const Discord = require('discord.js')
const config = require('./config/config.json')
let points = JSON.parse(fs.readFileSync('./config/points.json', 'utf8'))
const bot = new Discord.Client()


function clean(text) {
    if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
}

var neko = ["images/10668343035_f08673e0d5_b.jpg",
    "images/45b3985d490986678e7a8bb662e36eef.jpg",
    "images/834695a328db3ff65df7a9f4909711ca.jpg",
    "images/a671bb111707792baf9312477dbf2ad7.jpg",
    "images/a_girl_neko_by_mokathehexgirl-d417t2w.jpg",
    "images/ae95d1e89a9fcbae49c069282586a55b.jpg",
    "images/c32f89d1e5aed0c09a72926580d80804.jpg",
    "images/original_drawn_by_ryuusei_ryuuseiseikou__12de6a076177ea1e6b8f4e748aa2127e.png",
    "images/sendai_kantai_collection_drawn_by_miko_92__sample-200fe157aa2bbab4ae1058a3671a16e0.jpg"
];

const megu_gif = ["images/megumin/31C.gif",
    "images/megumin/835.gif",
    "images/megumin/29624eafdcdb7b8a760aee62e9dbee3ba4780f9d_hq.gif",
    "images/megumin/d59d92bc18d1c6a59400e65d240bb07421d705dd_hq.gif",
    "images/megumin/dc3.gif",
    "images/megumin/konosuba-Megumin.gif",
    "images/megumin/Megumin+comp+i+mentioned+having+a+large+collection+of+megumin_61e005_5996791.gif",
    "images/megumin/raw (1).gif",
    "images/megmuin/raw.gif",
    "images/megumin/sI00CRK.gif",
    "images/megumin/tumblr_o1b80j2fWR1s21xzoo2_540.gif",
    "images/megumin/tumblr_o1mstjeq0H1qa94xto1_500.gif"
];


bot.on('error', e => {
    console.error(e);
});
bot.on('warn', e => {
    console.warn(e);
});
bot.on('ready', () => {
    console.log('I am ready');
});

process.on("unhandledRejection", err => {
    console.error("Uncaught Promise Error: \n" + err.stack);
});

bot.on('message', msg => {

    if (msg.author.bot) return;
    if (!(msg.author.id == "162325985079984129" ||
            msg.author.id == "165961444389683202" ||
            msg.author.id == "164132021617033216" ||
            msg.author.id == "232213780061224960" ||
            msg.author.id == "184051394179891200" ||
            msg.author.id == "222028322966601740")) {
        return;
    }

    if (msg.isMentioned(bot.user.id) && args[0] === "prefix") {
        msg.channel.sendMessage(`Prefix is now ${config.prefix} `)
    } // check if bot is mentioned

    // slice function
    let cmd = msg.content.split(" ")[0];
    cmd = cmd.slice(config.prefix.length);
    let args = msg.content.split(" ").slice(1);
    let comText = (msg.content.split(" ").slice(1)).join(" ");

    if (cmd === 'say') {
        msg.channel.sendMessage(comText);
        console.log(`[say]: ${msg.author.username}: ${comText}`)
    } else

    // level system
    if (!points[msg.author.id]) points[msg.author.id] = { points: 0, level: 0 };
    let userData = points[msg.author.id];
    userData.points++;

    if (!msg.content.startsWith(config.prefix)) return; // check prefix

    let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
    if (curLevel > userData.level) {
        //Level up!
        userData.level = curLevel;
        //msg.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
        console.log(`${points[msg.author.id]} just leveled up to ${curLevel}`)
    }

    if (cmd === 'lvl') {
        msg.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
    }
    fs.writeFile('./config/points.json', JSON.stringify(points), (err) => { if (err) console.error(err) });

    if (cmd === 'add') {
        let numArray = args.map(n => parseInt(n))
        let total = numArray.reduce((p, c) => p + c)
        msg.channel.sendMessage(total);
    } else

    if (cmd === 'min') {
        let numArray = args.map(n => parseInt(n))
        let total = numArray.reduce((p, c) => p - c)
        msg.channel.sendMessage(total);
    } else

    if (cmd === 'mul') {
        let numArray = args.map(n => parseInt(n))
        let total = numArray.reduce((p, c) => p * c)
        msg.channel.sendMessage(total);
    } else

    if (cmd === 'divi') {
        let numArray = args.map(n => parseInt(n))
        let total = numArray.reduce((p, c) => p / c)
        msg.channel.sendMessage(total);
    } else

    if (cmd === 'mod') {
        let numArray = args.map(n => parseInt(n))
        let total = numArray.reduce((p, c) => p % c)
        msg.channel.sendMessage(total);
    } else

    if (cmd === 'help') {
        const embed = new Discord.RichEmbed()
            .setColor(0x00AE90)
            .setAuthor('Self bot', 'https://cdn.discordapp.com/avatars/162325985079984129/a_89fbbb12c58acd7d9fe0099cb2ae4ecf.gif?size=1024')
            .setTimestamp()
            .addField('Commands', 'ping, say, sayd, mod, divi, mul, min, add, neko, ava, megu_gif, lvl');
        // msg.author.sendEmbed for direct message
        msg.channel.sendEmbed(
            embed, { disableEveryone: true }
        );
    } else

    if (cmd === "ava") {
        if (msg.mentions.users.first()) {
            let mentioned = msg.mentions.users.first().avatarURL;
            msg.channel.sendMessage(mentioned);
        } else {
            msg.channel.sendMessage(msg.author.avatarURL);
            let ava = msg.author.avatarURL
        }
    } else

    if (cmd === 'neko') {
        let Neko = neko[Math.floor(Math.random() * neko.length)];
        msg.channel.sendFile(Neko);
    } else

    if (cmd === 'megu_gif') {
        let Megu_gif = megu_gif[Math.floor(Math.random() * megu_gif.length)];
        msg.channel.sendFile(Megu_gif);
    } else

    if (cmd === 'sayd') {
        msg.delete();
        msg.channel.sendMessage(comText);
        console.log(`[sayd]: ${msg.author.username}: ${comText}`)
    } else

    if (cmd === 'ping') {
        var start = Date.now();
        msg.channel.sendMessage('pong').then(msg => {
            var stop = Date.now();
            var diff = (stop - start);
            msg.edit(`pong\`${diff}ms\``);
        })
    } else

    if (cmd === 'join') {
        console.log(`try join channel`);
        let UsersCurrentVoiceChannel = msg.member.voiceChannel;
        console.log(UsersCurrentVoiceChannel);
        voiceChannel.join()
            .then(connection => {
                const dispatcher = connection.playFile('E:\peter\OneDrive\musik\OMFG - Hello - YouTube.mkv');
            })
            .catch(console.error);
    } else

    if (cmd === 'eval') {
        try {
            let code = args.join(" ");
            let evaled = eval(code);
            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);
            msg.channel.sendCode("xl", clean(evaled));
        } catch (err) {
            msg.channel.sendMessage(` \` xl\n${clean(err)}\n\` `);
        }
    } else

    if (cmd === 'setprefix') {
        let args = msg.content.split(' ').slice(1);
        // change the configuration in memory
        config.prefix = args[0];
        // Now we have to save the file.
        fs.writeFile('./config/config.json', JSON.stringify(config), (err) => {
            if (err) console.error(err);
        });
        console.log(`Prefix has been changed`);
        msg.channel.sendMessage(`Prefix is now changed to ${config.prefix} `)
    }

});
bot.login(config.token);