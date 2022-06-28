const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/user_management", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("sussecfully");
  } catch (error) {
    console.log("fail");
  }
}

module.exports = { connect };
