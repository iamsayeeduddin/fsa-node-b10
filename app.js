import http from "http";
// const require = require("http");

const server = http.createServer();

server.listen(5000, () => console.log("Server UP & Running!"));
