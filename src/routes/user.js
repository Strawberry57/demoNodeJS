const express = require("express");
const router = express.Router();
const UserController = require("../app/controllers/UserController");

router.get("/create", UserController.create);
router.post("/user_create", UserController.userCreate);
router.put("/user/:id", UserController.userUpdate);
router.delete("/user/:id", UserController.userDelete);
router.get("/:id/edit", UserController.userEdit);
router.get("/", UserController.show);

module.exports = router;
