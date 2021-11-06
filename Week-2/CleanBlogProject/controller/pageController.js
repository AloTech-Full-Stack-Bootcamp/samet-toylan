const blog = require("../model/Blog");

exports.getAboutPage = function (req, res) {
  res.render("about");
};

exports.getAddPage = function (req, res) {
  res.render("add_post");
};
9;

exports.getEditPage = async function (req, res) {
  const postById = await blog.findById(req.params.id);
  res.render("post_edit", {
    post: postById,
  });
};
