var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../../Routes/api-routes");

// Create all our routes and set up logic within those routes where required.
router.get("/api/burgers", function(req, res) {

    console.log("test");

    res.render("index", res);

});


module.exports = router;