///----My Basic Server Code
///--- Now Working with External Modules
///--- Working with Nodemon ( Run Application Continuously )
///--- Creating two servers with different ports

const http = require("http");
///-----Server 1
http
  .createServer((req, res) => {
    res.write("<h1>This is Ahtisham Ahmad</h1>");
    res.write("<h1>Software Engineer</h1>");
    res.end("Hello World from Server.js");
    console.log("Server is running on port 4800");
  })
  .listen(4800);

///-----Server 2
http
  .createServer((req, res) => {
    res.write("<h1>This is Muhammad Hanzla</h1>");
    res.write("<h1>Software Engineer</h1>");
    res.end("Hello World from Server.js");
    console.log("Server is running on port 4800");
  })
  .listen(5800);
