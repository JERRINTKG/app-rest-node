const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  mode: "production",
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  target: "node"
};
