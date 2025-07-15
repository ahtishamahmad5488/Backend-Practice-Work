const http = require("http");

const userData = [
  {
    name: "Ahtisham Ahmad",
    age: 23,
    email: "ahtisham548849@gmail.com",
  },
  {
    name: "Muhammad Hanzla",
    age: 11,
    email: "hanzla123@gmail.com",
  },
  {
    name: "Muhammad Ahmad",
    age: 5,
    email: "ahmad35@gmail.com",
  },
  {
    name: "Muskan Fatima",
    age: 10,
    email: "muskanfatima786@gmail.com",
  },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json"); ///--- Set the content type to JSON
  res.write(JSON.stringify(userData)); ///--- JSON.stringify() converts JavaScript objects into JSON strings so they can be properly sent to the client via res.write() or res.end()
  res.end(); ///--- End Response
});

server.listen(4000);
