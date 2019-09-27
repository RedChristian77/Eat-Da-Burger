var path = require("path");
let burgers = require("./api-routes")
// Routes
// =============================================================
module.exports = function(app) {

  // index route loads view.html
  app.get("/", function(req, res) {
          res.render("index",res);
    });





};
