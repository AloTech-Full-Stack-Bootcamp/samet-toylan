const blog = require("../model/Blog");
exports.createPost = function (req, res) {
  console.log(req.body);
  blog.create({
    title: req.body.title,
    detail: req.body.detail,
    dateCreated: Date.now(),
  });
  res.redirect("/");
};

exports.getAllBlogs = async function (req, res) {
  const blogs = await blog.find({});
  res.render("index", {
    blogs: blogs,
  });
};

exports.getPostById = async function (req, res) {
  const foundedPost = await blog.findById(req.params.id);

  res.render("post", {
    post: foundedPost,
  });
};

exports.editPost = async function (req, res) {
  const foundedPost = await blog.findById(req.params.id);
  console.log(req.body.title);
  foundedPost.title = req.body.title;
  foundedPost.detail = req.body.detail;
  foundedPost.save();

  res.redirect("/post/" + req.params.id);
};

exports.deletePost = async function (req, res) {
  await blog.findByIdAndRemove(req.params.id);
  res.redirect("/");
};
