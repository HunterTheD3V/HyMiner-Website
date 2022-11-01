const fs = require("fs");
const out = { name: "test", id: 456 };
const myConsole = new console.Console(fs.createWriteStream("./output.json")); myConsole.log(out);