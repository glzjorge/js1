var fs = require("fs");
console.log("\nAbriendo Archivo...");

var content = fs.readFileSync("archivo.txt");
console.log(content);

console.log("\nHaciendo otra cosa");
console.log(process.uptime())