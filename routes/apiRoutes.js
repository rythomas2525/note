const path = require("path")
var notesData = require("../data/notesData")
var db = require("../db/db.json")


module.exports = function (app) {


    app.get("/api/notes", function (req, res) {
        return res.json(db);
    });

    app.post("/api/notes", function (req, res) {



    })

}