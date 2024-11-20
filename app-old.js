import http from "http";
// import path from "path";
// import fs from "fs";
// import os from "os";
// const require = require("http");
import add from "./module.js";

// const controller = ;

const server = http.createServer((req, res) => {
  // console.log(path.join());
  //   console.log(req.body);
  //   res.statusCode = 400;
  //   res.end("Hello World!");

  if (req.url.includes("welcome")) {
    res.statusCode = 200;
    res.end("Welcome to My Backend Server!");
  } else {
    res.statusCode = 404;
    res.end();
  }
});

console.log(add());
server.listen(5000, () => console.log("Server UP & Running!"));
