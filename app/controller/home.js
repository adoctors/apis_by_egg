const { Controller } = require("egg");

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    const result = await ctx.model.User.find().populate("role");
    console.log(result[3].role);
    ctx.helper.success({ ctx, res: result });
  }
}

module.exports = HomeController;
