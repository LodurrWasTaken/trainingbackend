module.exports = function checkAuth(req, res, next) {
  if (!req.headers.authorization) {
    res.send({ status: 403 });
  }

  next();
};
