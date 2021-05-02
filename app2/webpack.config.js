const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

const config = {
  entry: [
    'react-hot-loader/patch',
    './source/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[contenthash].js',
    // publicPath: 'http://localhost:8080/', // New
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
  },
  devtool: 'source-map',
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      failOnError: true,
      exclude: ['node_modules'],
    }),
    new HtmlWebpackPlugin({
      template: 'source/index.html',
    }),
    // New
    new ModuleFederationPlugin({
      name: 'application_b',
      library: { type: 'var', name: 'application_b' },
      filename: 'bRemoteEntry.js',
      exposes: {
        './SayHelloFromB': './source/Application/pages/WelcomeB.jsx',
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
    config.output.filename = '[name].js';
  }
  return config;
};
