const path = require("path");
const fs = require("fs");
const os = require("os");

// fs.writeFile(
//   path.join(__dirname, "./refs", "events.js"),
//   "hello events from user.js ",
//   () => {
//     (err) => {
//       if (err) throw err;
//     };
//   }
// );

// console.log(os.hostname(), os.platform(), os.totalmem(), os.getPriority());

// fs.mkdirSync(path.join(__dirname, "./refs", "note"), (err) => {
//   if (err) throw new Error(err);

//   console.log("It was creates");
// });

const user = {
  name: "Elena",
  age: 22,
};

// console.log(path.parse(__filename).ext);
// console.log(path.join(__dirname, "../client/public"));
// console.log(path.resolve(__filename, "../client"));

module.exports = {
  user: user,
  sayHello() {
    console.log("Hello");
  },
};
