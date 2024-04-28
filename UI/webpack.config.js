const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const loader = require("sass-loader");

module.exports = {
  //"entry": "./src/index.js",
  output: {
    path: path.resolve(__dirname, "/dist"), // bundle output path
    filename: "bundle.js", // name of the bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import immages aand font
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    port: 3030, // port to host webapp
  },
};
