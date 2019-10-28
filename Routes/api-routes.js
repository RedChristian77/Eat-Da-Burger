
let db = require("../models");

module.exports = function(app) {
  //Get For all burgers
  app.get("/api/burgers", async function(req, res) {
    let burgerStuff = await db.Burger.findAll({});
    res.json(burgerStuff)
  });

  //Posting a new burger
  app.post("/api/burgers", async function(req, res) {
    const dbBurger = await db.Burger.create({
      burger_name: req.body.burger_name
    })
    res.json(dbBurger);
  });

  app.put("/api/burger/:id", async function(req,res) {
    const dbBurger = await db.Burger.update({
      devoured: 1
    }, {
      where:{
        id: req.params.id
      }
    })
    res.json(dbBurger);
  })

  app.post("/api/burger/initalize/:name", async function(req, res) {
    const dbBurger = await db.Burger.create({
      burger_name: req.params.name
    })
    res.json(dbBurger);
  })


};