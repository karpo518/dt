/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const DotenvPlugin = require('dotenv-webpack');

const config = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new CompressionPlugin({ test: /\.js(\?.*)?$/i }),
    new DotenvPlugin()
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: "/index.html" }],
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.module\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.s?css$/,
        exclude: /\.module\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: "icss",
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js", ".jsx"],
  },
};

module.exports = (env, argv) => {

  config.output.publicPath = (argv.mode === 'production') ? '/dt/' : '';
  return config;
  
};