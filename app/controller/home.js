const { Controller } = require("egg");

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    const result = await ctx.model.User.find({});
    console.log(result);
    ctx.helper.success({ ctx });
  }
}

module.exports = HomeController;
