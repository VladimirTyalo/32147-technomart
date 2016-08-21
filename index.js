(function () {
  "use strict";

  var express = require('express');
  var app = express();

  app.set("port", (process.env.PORT || 8080));
  app.use(express.static(__dirname + "/views"));

  app.set("views", __dirname + "/views");
  app.set("views engine", "ejs");


  app.get("/", function(req, res) {
    res.render("index.html");
  });

  app.get("/index", function(req, res) {
    res.redirect("/");
  });

  app.get("/catalog", function(req, res) {
    res.render("catalog.html");
  });

  app.use(function(req, res) {
    res.sendStatus(404);
  });

  app.listen(app.get("port"), function() {
    console.log("Node app is running on port ", app.get("port"));
  });

})();
