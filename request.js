const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);

  if (req.url == "/") {
    res.write("<h1>Home Page</h1>");
  } else if (req.url == "/about") {
    res.write("<h1>About Page</h1>");
  } else if (req.url == "/contact") {
    res.write("<h1>Contact Page</h1>");
  } else {
    res.write("<h1>404 Not Found</h1>");
  }
  res.end();
});

server.listen(3000);
