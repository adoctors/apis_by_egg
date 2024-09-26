const { Controller } = require("egg");

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log("xxxxxx");
    // 外键，只能直接关联id，复杂的还得用虚拟字段
    // const result = await ctx.model.User.find().populate("role_type", "name");
    // 虚拟字段
    const result = await ctx.model.Class01.find()
      .select("-__v")
      .populate({
        path: "role",
        select: "-__v -_id -updated_at -created_at",
        // match: (r) => {
        //   console.log("role", r);
        //   return { tags: r.name };
        // },
        transform: (r, id) => {
          console.log("role", r, id, r.name);
          return { name: r.name };
        },
      });
    console.log(result[3].role);
    ctx.helper.success({ ctx, res: result });
  }
}

module.exports = HomeController;
