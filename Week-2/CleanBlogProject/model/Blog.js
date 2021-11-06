const mongoose = require("mongoose");
const schema = mongoose.Schema;

const blogSchema = new schema({
  title: String,
  detail: String,
  dateCreated: Date,
});

module.exports = mongoose.model("blog", blogSchema);
