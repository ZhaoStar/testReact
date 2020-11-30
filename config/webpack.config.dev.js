

const autoprefixer = require('autoprefixer');
const path =  require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');
const px2rem = require('postcss-px2rem');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const publicPath = '/';

const publicUrl = '';

const env = getClientEnvironment(publicUrl);


module.exports = {
  devtool: 'cheap-module-source-map'
}
