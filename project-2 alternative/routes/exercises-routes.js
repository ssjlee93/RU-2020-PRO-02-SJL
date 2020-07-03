const db = require("../models");

module.exports = function(app) {
    // Find all Authors and return them to the user with res.json
    app.get("/api/exercises", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const result = await db.Exercises.findAll({
        include: [db.Routines]
      })
      res.json(result);
    });

    app.get("/api/exercises/:id", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const result = await db.Exercises.findOne({ 
        where: {
        id: req.params.id
      },
      include: [db.Routines]
    })
      res.json(result); 
    });

    app.post("/api/exercises", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const result = await db.Exercises.create(req.body)
      res.json(result);
    });

    app.put("/api/exercises/:id", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const result = await db.Exercises.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      res.json(result);
    });

    app.delete("//api/exercises/:id", async function (req, res) {
      const result = await db.Exercises.destroy({
          where: {
            id: req.params.id
          }
        })
        res.json(result);
  });

};