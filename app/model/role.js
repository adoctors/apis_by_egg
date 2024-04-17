/*
 * @Author: kl
 * @email: qkeliang@163.com
 * @Date: 2024-04-16 23:48:46
 * @Description: 角色
 * @LastEditors: kl
 */
const { roleSchema } = require("../const/schema");

module.exports = (app) => {
  const conn = app.mongooseDB.get("test");
  return conn.model("Role", roleSchema);
};
