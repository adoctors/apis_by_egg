/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1712908325639_9406";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mongoose: {
      clients: {
        test: {
          url: "mongodb://127.0.0.1/test",
          options: {},
          plugins: [],
        },
        prod: {
          url: "mongodb://127.0.0.1/prod",
          options: {},
          plugins: [],
        },
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
