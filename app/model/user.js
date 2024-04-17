/*
 * @Author: kl
 * @email: qkeliang@163.com
 * @Date: 2024-04-12 22:38:14
 * @Description:
 * @LastEditors: kl
 */

const { userSchema } = require("../const/schema");

module.exports = (app) => {
  const conn = app.mongooseDB.get("test");
  return conn.model("User", userSchema);
};
