//https://www.youtube.com/watch?v=MpGLUVbqoYQ
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main_main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
