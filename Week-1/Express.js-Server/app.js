const express = require("express");
const app = express();
const port = 5000;

//Get request for index url
app.get("/", (req, res) => {
  //When get request call html file.
  res.sendFile(__dirname + "/html/index.html");
});

//Get request for index url
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/html/about.html");
});

//Get request for index url
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/html/contact.html");
});

//Listen to the port
app.listen(port, () => {
  console.log("Listening at : " + port);
});
