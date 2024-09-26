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
  config.middleware = [ "errorHandler" ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    cors: {
      domainWhiteList: [ "http://localhost:4200" ],
      allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
    },
    mongoose: {
      clients: {
        test: {
          url: "mongodb://127.0.0.1/test_api",
          options: {},
          plugins: [],
        },
        prod: {
          url: "mongodb://127.0.0.1/prod_api",
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
