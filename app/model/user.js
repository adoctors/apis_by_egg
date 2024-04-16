/*
 * @Author: kl
 * @email: qkeliang@163.com
 * @Date: 2024-04-12 22:38:14
 * @Description:
 * @LastEditors: kl
 */

module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get("test");
  const UserSchema = new Schema({
    name: { type: String },
    password: { type: String },
    email: { type: String },
  });

  return conn.model("User", UserSchema);
};
