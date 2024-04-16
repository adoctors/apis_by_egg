exports.success = ({ ctx, res = {} }) => {
  const { message = "success", code = 0 } = res;
  delete res.message;
  delete res.code;
  ctx.body = {
    code,
    data: res,
    message,
  };
  ctx.status = 200;
};
