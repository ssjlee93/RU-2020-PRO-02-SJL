const db = require("../models");

module.exports = function(app) {
    // Find all Authors and return them to the user with res.json
    app.get("/api/pr", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const dbPR = await db.PR.findAll({})
      res.json({routines: dbPR});
    });

    app.get("/api/pr/:name", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const dbPR = await db.PR.findOne({ 
        where: {
        routineName: req.params.name
      }
    })
      res.json(dbPR);
    });

    app.post("/api/pr", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const dbPR = await db.PR.create(req.body)
      res.json(dbPR);
    });


    app.put("/api/pr/:id", async function(req, res) {
      // Update takes in an object describing the properties we want to update, and
      // we use where to describe which objects we want to update
      
      const {routineName, sets, exerciseOne, exerciseTwo, exerciseThree, repOne, repTwo, repThree} = req.body;
  
      const dbPR = await db.PR.update({
        routineName,
        sets,
        exerciseOne,
        exerciseTwo,
        exerciseThree,
        repOne,
        repTwo,
        repThree
      },{
        where: {
          id: req.params.id
        }
      })
      res.json(dbPR);
    });

    app.delete("/api/pr/:id", async function (req, res) {
      const dbPR = await db.PR.destroy({
          where: {
            id: req.params.id
          }
        })
        res.json(dbPR);
  });

};