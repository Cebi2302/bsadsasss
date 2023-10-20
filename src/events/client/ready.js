const express = require('express');
require('dotenv').config();
const colors = require("colors");

const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log('\x1b[36m%s\x1b[0m', `|    🔗 Listening to RTX : ${port}`));

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
const { ActivityType } = require("discord.js");

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'Cebi Development',
            type: "WATCHING",
            url: "https://youtube.com/"
        }
    });
});
client.on('message', message => {
    if (message.content == "hi") {
        message.channel.send("Hello!");
    } else if (message.content == "Dead") {
        message.channel.send("Thank God! Atleast You are Alive");
    }
});

client.login(process.env.token);

// const chalk = require("chalk");
// const { ActivityType } = require("discord.js");

// module.exports = {
//     name: 'ready',
//     once: true,
//     async execute(client) {
//         console.log(chalk.white(chalk.bold('SYSTEM')), chalk.red('+'), chalk.cyan(`Successfully logged to ${client.user.username}`))

//         setInterval(async function () {
//             const status = [`VZ STORE MC`];
//             const statuses = status[Math.floor(Math.random() * status.length)]
//             client.user.setActivity(statuses, { type: ActivityType.Playing })
//             client.user.setPresence({ status: 'online' })
//         }, 10000)
//     }
// }