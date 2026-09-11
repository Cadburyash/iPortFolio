const fs = require("fs");

fs.copyFileSync("build/index.html", "build/404.html");

console.log("404.html created successfully");