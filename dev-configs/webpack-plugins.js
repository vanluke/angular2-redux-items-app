import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import split from 'webpack-split-by-path';
import copy from 'copy-webpack-plugin';

const sourceMap = process.env.TEST
? [new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.ts$/ })]
: [ ];

const basePlugins = [
  new webpack.DefinePlugin({
    dev: process.env.NODE_ENV !== 'production',
    production: process.env.NODE_ENV === 'production',
    test: JSON.stringify(process.env.TEST || false),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new split([
    { name: 'vendor', path: [__dirname + '/node_modules/'] },
  ]),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    inject: 'body',
    minify: false,
  }),
  new webpack.NoErrorsPlugin(),
  new copy([
    { from: 'src/assets', to: 'assets' },
  ]),
].concat(sourceMap);

const prodPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
      warnings: false,
    },
  }),
];
const definedPlugins = basePlugins;

export default definedPlugins;
