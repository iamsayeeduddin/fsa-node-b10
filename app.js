import http from "http";
// const require = require("http");

// const controller = ;

const server = http.createServer((req, res) => {
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

server.listen(5000, () => console.log("Server UP & Running!"));
