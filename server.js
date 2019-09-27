var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//handlebars
var exphbs  = require('express-handlebars');
 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

 
// app.get('/', function (req, res) {
//     res.render('');
// });

let routes = require("./config/controllers/controllers")
app.use(routes);
 
app.listen(3000);
// Routes
// =============================================================
require("./Routes/api-routes")(app);
require("./Routes/html-routes")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
