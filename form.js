const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile("html/form.html", "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.write("<h1>Error Reading File</h1>");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
        }
        res.end();
      });
    } else if (req.url === "/submit") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Form Submitted Successfully</h1>");
      res.write("<h2>Thank you for submitting the form!</h2>");
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404 Not Found</h1>");
      res.end();
    }
  })
  .listen(2200, () => {
    console.log("✅ Server running on http://localhost:2200");
  });

// const http = require("http");

// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, {
//       "Content-Type": "text/html",
//     });
//     console.log(req.url);

//     if (req.url == "/") {
//       resp.write(`
//       <form action="/submit" method="POST">
//         <input type="text"  placeholder="Enter username" name="name" />
//         <input type="text"  placeholder="Enter email" name="email" />
//         <button>Submit</button>
//       </form>
//     `);
//       resp.end();
//     } else if (req.url == "/submit") {
//       resp.write("<h1>Form Submitted Successfully</h1>");
//       resp.write("<h2>Thank you for submitting the form!</h2>");
//     }
//   })
//   .listen(2200);
