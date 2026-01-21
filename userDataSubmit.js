const queryString = require("querystring");

function userDataSubmit(req, resp) {
  let dataBody = [];
  req.on("data", (chunk) => {
    (dataBody, push(chunk));
  });
  req.on("end", () => {
    let rawData = Buffer.concat(dataBody).toString();
    let readableData = queryString.parse(rawData);
    let dataString =
      "My Name Is " + readableData.name + ". My Email Is " + readableData.email;
    console.log(dataString);
  });

  resp.write(`<h1>Form submitted successfully!</h1>`);
}

module.exports = userDataSubmit;
