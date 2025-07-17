const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("html/web.html", "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/html" });
      res.write("<h1>Error Reading File</h1>");
      res.end();
      return;
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
server.listen(3200);
