const axios = require("axios")
const chalk = require('chalk')
let express = require("express");
let app = express();
const http = require('http');
let PORT = process.env.PORT || 8050;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let i = 0;
async function web () {
    console.log(chalk.yellowBright.bold("Starting..."))
    app.get('/', function (req, res) {
        res.send({
            status: "Active"
        });
    })
    const server = http.createServer(app);
    server.listen(PORT, () => {
        console.log(chalk.yellowBright.bold('Connected to Api -- ', PORT));
    })
    while (true) {
        i++;
        try {
         let response = await axios("http://x-bot-md-server.mmosnsnn.repl.co")
            console.log(chalk.yellowBright.bold('Connected to EX-BOT-MD -- ', response.status));
            await sleep(40000)
        } catch {
            console.log(chalk.red.bold("Retrying..."));
        }
    }
}
module.exports = web