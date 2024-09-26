/*
 * @Author: kl
 * @email: qkeliang@163.com
 * @Date: 2024-04-16 23:29:58
 * @Description: 初始化数据库
 * @LastEditors: kl
 */

const mongoose = require("mongoose");
const {
  userSchema,
  roleSchema,
  Class01Schema,
} = require("../app/const/schema");

const saveData = async (modelName, Schema, modelData) => {
  const myModel = mongoose.model(modelName, Schema);
  try {
    const savedData = await myModel.create(modelData);
    console.log(`${modelName} saved: `, savedData);
  } catch (err) {
    console.error(`Error saving ${modelName}:`, err);
  }
};

mongoose.connect("mongodb://127.0.0.1:27017/test_api").then(() => {
  console.log("Connected!");
  const roles = [
    { name: "用户", type: "1" },
    { name: "管理员", type: "2" },
    { name: "超级管理员", type: "3" },
  ];

  saveData("Role", roleSchema, roles);

  const users = [
    { name: "小明", password: "12345678", email: "xm@qq.com", role_type: "1" },
    { name: "小朱", password: "12345678", email: "xz@qq.com", role_type: "1" },
    { name: "小红", password: "12345678", email: "xh@qq.com", role_type: "2" },
    { name: "小刚", password: "12345678", email: "xg@qq.com", role_type: "3" },
  ];

  saveData("User", userSchema, users);

  const class01 = [
    { name: "小明", email: "xm@qq.com", role_type: "1" },
    { name: "小朱", email: "xz@qq.com", role_type: "1" },
    { name: "小红", email: "xh@qq.com", role_type: "2" },
    { name: "小刚", email: "xg@qq.com", role_type: "3" },
  ];

  saveData("Class01", Class01Schema, class01);
});
