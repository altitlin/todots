const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

  return {
    context: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
      filename: filename('js'),
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './dist'),
      compress: true,
      port: 8080,
      hot: isDev,
    },
    devtool: isDev ? 'source-map' : '',
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
      }),
      new CleanWebpackPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['ts-loader'],
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};
