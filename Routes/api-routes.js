
let db = require("../models");
module.exports = function(app) {

  //Get For all burgers
  app.get("/api/burgers", function(req, res) {
    db.burgers.findAll({}).then(function(dbburger) {
      res.json(dbburger);
    });
  });

  //Posting a new burger
  app.post("/api/burgers", function(req, res) {
    db.burgers.create({
      burger_name: req.body.text,
      //set so all burgers entered are not eaten
      devoured: false
    }).then(function(dbburger) {
      res.json(dbburger);
    });
  });
};