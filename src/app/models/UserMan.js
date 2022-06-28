const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const User = new Schema(
  {
    username: { type: String, maxLength: 255 },
    email: { type: String, maxLength: 265 },
    phonenumber: { type: String },
    slug: { type: String, slug: "username", unique: true },
  },
  { timestamps: true }
);
mongoose.plugin(slug);

User.plugin(mongooseDelete);

module.exports = mongoose.model("User", User);
