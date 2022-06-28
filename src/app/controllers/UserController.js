const User = require("../models/UserMan");
const {
  mutilpleMongooseToObject,
  mongooseToObject,
} = require("../../ultis/moogose");

class UserController {
  // [GET] /
  show(req, res, next) {
    User.find({})
      .then((user) => {
        res.render("user", { user: mutilpleMongooseToObject(user) });
      })
      .catch(next);
  }
  // [GET] /user_create
  create(req, res, next) {
    res.render("users/create");
  }
  //[POST] /user
  userCreate(req, res, next) {
    const user = new User(req.body);
    user
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }
  // [GET] /:id/edit
  userEdit(req, res, next) {
    User.findById(req.params.id)
      .then((user) =>
        res.render("users/edit", { user: mongooseToObject(user) })
      )
      .catch(next);
  }
  //[PUT] /users/:id
  userUpdate(req, res, next) {
    User.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/"))
      .catch(next);
  }
  userDelete(req, res, next) {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}
module.exports = new UserController();
