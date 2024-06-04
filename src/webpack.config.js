const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    filename: 'main.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Путь к выходной директории
    clean: true, // Очищает выходную директорию перед сборкой
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Регулярное выражение для поиска JavaScript файлов
        exclude: /node_modules/, // Исключить node_modules
        use: {
          loader: 'babel-loader', // Использовать babel-loader
        },
      },
      {
        test: /\.css$/, // Регулярное выражение для поиска CSS файлов
        use: ['style-loader', 'css-loader'], // Использовать style-loader и css-loader
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML файла
    }),
  ],
};
