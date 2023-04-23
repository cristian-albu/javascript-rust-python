const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, function (err) {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// File write
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World",
  function (err) {
    if (err) throw err;
    console.log("File written to...");
  }
);

//File append
fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  "I love NodeJs",
  function (err) {
    if (err) throw err;
    console.log("File appended to...");
  }
);

// Read file
fs.readFile(
  path.join(__dirname, "/test", "hello.txt"),
  "utf-8",
  function (err, data) {
    if (err) throw err;
    console.log(data);
  }
);

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  function (err) {
    if (err) throw err;
    console.log("File renamed");
  }
);
