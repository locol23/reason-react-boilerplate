const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const env = process.env.NODE_ENV

module.exports = {
  entry: [path.join(__dirname, './src/Index.bs.js')],
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'bundle.js',
  },
  mode: env,
  devServer: {
    port: 3000,
    contentBase: 'dist'
  },
  resolve: {
    extensions: ['.bs.js', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
