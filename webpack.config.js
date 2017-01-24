module.exports = {
  entry: {
    javascript: "./src/index.js",
    html: "./public/index.html"
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/public",
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
    ]
  },
  watch: true
}
