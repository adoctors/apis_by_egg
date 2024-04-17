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
    type: Number,
    // 1用户，2管理员，3超级管理员
    required: true,
    unique: true,
  },
  name: { ...STRING_2_10, unique: true, required: true },
};
const roleSchema = new Schema(Role, TIMESTAMPS);

const User = {
  name: { ...STRING_2_10, required: true, index: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  role_type: {
    type: Number,
    required: true,
  },
};
const userSchema = new Schema(User, {
  ...TIMESTAMPS,
  virtuals: {
    role: {
      options: {
        ref: "Role",
        localField: "role_type",
        foreignField: "type",
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
};
