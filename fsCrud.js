// const fs = require("fs");

// // // fs.writeFileSync("files/banana.txt", "This is a banana.");
// // // fs.unlinkSync("files/banana.txt");

// // if (fs.existsSync("files/banana.txt")) {
// //   fs.unlinkSync("files/banana.txt");
// //   console.log("banana.txt deleted!");
// // } else {
// //   console.log("banana.txt does not exist!");
// // }

// // const data = fs.readFileSync("files/apple.txt", "utf-8");
// // console.log(data);

// // fs.appendFileSync("files/apple.txt", " And this is a good fruit for health.");

const fs = require("fs");

const operation = process.argv[2];
if (operation === "write") {
  const name = process.argv[3];
  const content = process.argv[4];
  const fullName = "files/" + name + ".txt";
  fs.writeFileSync(fullName, content);
} else if (operation === "read") {
  const name = process.argv[3];
  const fullName = "files/" + name + ".txt";
  let data = fs.readFileSync(fullName, "utf-8");
  console.log(data);
} else if (operation === "update") {
  const name = process.argv[3];
  const content = process.argv[4];
  const fullName = "files/" + name + ".txt";
  let data = fs.appendFileSync(fullName, content);
  console.log(data);
} else if (operation === "delete") {
  const name = process.argv[3];
  const fullName = "files/" + name + ".txt";
  fs.unlinkSync(fullName);
} else {
  console.log("Unknown operation");
}
// const fs = require("fs");

// console.log(process.argv);

// const operation = process.argv[2];

// if (operation === "write") {
//   const name = process.argv[3];
//   const content = process.argv[4];

//   if (!fs.existsSync("files")) {
//     fs.mkdirSync("files");
//   }

//   const fullName = `files/${name}.txt`;

//   fs.writeFileSync(fullName, content);

//   console.log("✅ File successfully created");
// } else {
//   console.log("❌ Unknown operation");
// }
