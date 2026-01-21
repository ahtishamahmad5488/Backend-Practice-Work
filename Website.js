const http = require("http");
const fs = require("fs");

http
  .createServer((req, resp) => {
    ///==================///

    let collectHeaderData = fs.readFileSync("WebPage/header.html", "utf-8");
    let collectFooterData = fs.readFileSync("WebPage/footer.html", "utf-8");
    ///==================///
    let file = "/index";
    if (req.url != "/") {
      file = req.url;
    }
    console.log("WebPage/" + file + ".html");

    if (req.url != "/style.css") {
      fs.readFile("WebPage/" + file + ".html", "utf-8", (err, data) => {
        if (err) {
          resp.writeHead(500, { "Content-Type": "text/plain" });
          resp.end("Internal Server Error");
          return false;
        }
        // console.log();
        resp.write(collectHeaderData + "" + data + "" + collectFooterData);
        resp.end();
      });
    } else if (req.url == "/style.css") {
      fs.readFile("WebPage/style.css", "utf-8", (err, data) => {
        if (err) {
          resp.writeHead(500, { "Content-Type": "text/plain" });
          resp.end("CSS Not Found");
          return false;
        }
        resp.writeHead(200, { "Content-Type": "text/css" });
        resp.end(data);
      });
    }
  })
  .listen(3000);
