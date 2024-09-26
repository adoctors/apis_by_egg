

const { Class01Schema } = require("../const/schema");

module.exports = (app) => {
  const conn = app.mongooseDB.get("test");
  return conn.model("Class01", Class01Schema);
};
