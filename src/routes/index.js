const userRoute = require("./user");

function route(app) {
  app.use("/", userRoute);
}
module.exports = route;
