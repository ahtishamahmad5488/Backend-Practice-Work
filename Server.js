///----My Basic Server Code

const http = require("http");
http
  .createServer((req, res) => {
    res.write("<h1>This is Ahtisham Ahmad</h1>");
    res.end("Hello World from Server.js");
    console.log("Server is running on port 4800");
  })
  .listen(4800);
