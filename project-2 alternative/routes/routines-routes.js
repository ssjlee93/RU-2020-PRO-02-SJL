const db = require("../models");

module.exports = function(app) {
    // Find all Authors and return them to the user with res.json
    app.get("/api/routines", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const result = await db.Routines.findAll({
        include: [db.Exercises]
      })
      console.log(result);
      res.json(result);
    });

    app.get("/api/routines/:id", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const result = await db.Routines.findOne({ 
        where: {
        id: req.params.id
      },
      include: [db.Exercise]
    })
      res.json(result); 
    });

    app.post("/api/routines", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const result = await db.Routines.create(req.body)
      res.json(result);
    });

    app.put("/api/routines/:id", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const result = await db.Routines.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      res.json(result);
    });

    app.delete("/api/routines/:id", async function (req, res) {
      const result = await db.Routines.destroy({
          where: {
            id: req.params.id
          }
        })
        res.json(result);
  });

};