///--- Create Response & Send to Server

const http = require("http");
const age = 23;

const server = http.createServer((req, res) => {
  // res.write("<h1>This is Backend work</h1>");

  ///--- setHeader tells about the content type of the response
  res.setHeader("Content-Type", "text/html");
  res.write(
    `<html>
    <head>
    <title>Coding Step By Step</title>
    <body>
    <h1>This is Backend Development</h1>
    <h2>This is Server Side Development</h2>
    <h3>This is Frontend Development</h3>
    <h4>This is Client Side Development</h4>
    <h1>` +
      age +
      `</h1>
      <h2>` +
      new Date() +
      `</h2>
    </body></head></html>`
  );
  res.end(); ///--- End the Response
  process.exit(); ///--- Exit the process after sending the response
});

server.listen(4800, () => {
  console.log("Server is running on port 4800");
});
