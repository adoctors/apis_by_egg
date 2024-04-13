const { Controller } = require("egg");

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    const result = await ctx.model.User.find({});

    console.log(result);

    ctx.body = "hi, egg";
  }
}

module.exports = HomeController;
