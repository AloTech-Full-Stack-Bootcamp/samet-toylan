const express = require("express");
const mongoose = require("mongoose");
const app = express();
const blogController = require("./controller/blogController");
const pageController = require("./controller/pageController");
const methodOverride = require("method-override");

mongoose.connect("mongodb://localhost/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {
  console.log("Request:", req.path);
  next();
});
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);
app.get("/", blogController.getAllBlogs);

app.get("/about", pageController.getAboutPage);

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/add_post", pageController.getAddPage);

app.post("/blog", blogController.createPost);

app.delete("/post/:id", blogController.deletePost);

app.get("/post/edit/:id", pageController.getEditPage);

app.put("/post/:id", blogController.editPost);

app.get("/post/:id", blogController.getPostById);
const port = 5000;

app.listen(port, () => {
  console.log("Sunucu " + port + " portunda oluşturuldu.");
});
