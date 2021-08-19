const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error on connecting databse"));
db.once("open", function () {
  console.log("Database Connected Successfully!");
});
module.exports = db;
