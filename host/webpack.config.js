const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

const config = {
  entry: [
    // 'react-hot-loader/patch',
    './source/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[contenthash].js',
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    contentBase: './public',
    overlay: true,
    historyApiFallback: true,
    port: 8081,
  },
  devtool: 'source-map',
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      failOnError: true,
      exclude: ['node_modules'],
    }),
    new HtmlWebpackPlugin({
      template: 'source/assets/index.html',
    }),
    // New
    new ModuleFederationPlugin({
      name: 'application_master',
      remotes: {
        application_b: 'application_b@https://knnect-mf-app2.netlify.app/bRemoteEntry.js',
      },
      shared: { react: { eager: true }, 'react-dom': { eager: true } },
    }),
  ],
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[hash].js';
  }
  return config;
};
