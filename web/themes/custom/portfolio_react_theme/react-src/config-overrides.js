const path = require('path');

module.exports = {
  webpack: function (config) {
    // Убираем хэши из имён файлов.
    config.output.filename = 'js/[name].js';
    config.output.chunkFilename = 'js/[name].chunk.js';

    // Изменяем папку вывода сборки.
    config.output.path = path.resolve(__dirname, '../react');

    // Обновляем пути для CSS.
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.filename = 'css/[name].css';
      miniCssExtractPlugin.options.chunkFilename = 'css/[name].chunk.css';
    }

    return config;
  },
};
