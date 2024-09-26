/*
 * @Author: kl
 * @email: qkeliang@163.com
 * @Date: 2024-04-17 00:17:41
 * @Description: schema集合
 * @LastEditors: kl
 */
const { Schema } = require("mongoose");
const { ObjectId, Mixed } = Schema.Types;

const TIMESTAMPS = {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

const DATE_NOW = { type: Date, default: Date.now };
const STRING_2_10 = { type: String, minLength: 2, maxLength: 10 };

const Role = {
  type: {
    type: String,
    // 1用户，2管理员，3超级管理员
    required: true,
    unique: true,
  },
  name: { ...STRING_2_10, unique: true, required: true },
};
const roleSchema = new Schema(Role, TIMESTAMPS);

// 外键方式
const User = {
  name: { ...STRING_2_10, required: true, index: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  role_type: {
    type: String,
    required: true,
    ref: "Role", // 使用外键关联
  },
};
const userSchema = new Schema(User, TIMESTAMPS);

// 虚拟字段方式
const Class01 = {
  name: { ...STRING_2_10, required: true, index: true },
  email: { type: String, unique: true, required: true },
  role_type: {
    type: String,
    required: true,
    ref: "Role",
  },
};
const Class01Schema = new Schema(Class01, {
  ...TIMESTAMPS,
  // 默认情况虚拟字段不输出，加上下方两个配置即可
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  virtuals: {
    // 定义的虚拟字段
    role: {
      options: {
        // 目标模型名
        ref: "Role",
        // 当前模型中存储引用内容的字段
        localField: "role_type",
        // 目标模型被引用的字段
        foreignField: "type",
        // 只获取一个
        justOne: true,
      },
    },
  },
});

const Log = {
  ip: String,
  host: String,
  method: String,
  path: String,
  request_body: Mixed,
  headers: Mixed,
};

const logSchema = new Schema(Log, TIMESTAMPS);

module.exports = {
  roleSchema,
  userSchema,
  logSchema,
  Class01Schema,
};
