const path = require("path")
var db = require("../db/db.json")


module.exports = function (app) {


    app.get("/api/notes", function (req, res) {
        return res.json(db);
    });

    app.post("/api/notes", function (req, res) {
        db.push(req.body)
        res.json(true)

        for (let i = 0; i < db.length; i++) {
            db[i].id = i.toString();
        }


    });
    app.get("/api/notes/:id", function (req, res) {
        var chosen = req.params.db;



        for (let i = 0; i < db.length; i++) {
            if (chosen === db[i].id) {
                return res.json(db[i])
            }
        }

        return res.json("That ID number does not exist");
    })

    app.delete("/api/notes/:id", function (req, res) {

        var chosen = req.params.db;







        for (let i = 0; i < db.length; i++) {
            if (chosen === db[i].id) {
                db.splice(i, 1);
            }
        }

        for (let i = 0; i < db.length; i++) {
            db[i].id = i.toString();
        }

        console.log(db);






        res.json({ ok: true })
    })



}





