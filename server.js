var express = require("express");
var parser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test_reports');

var Report = require("./report");

var app = express();

app.use(parser.json());

app.post("/report", function (req, res) {
    Report.create(req.body, function () {
        res.json({ok: true});
    });
})

app.get("/report", function (req, res) {
    Report.find({}).sort("-_id").exec(function (error, reports) {
        res.json(reports);
    })
})

app.use("/", express.static("static"));

console.log("Server is up");
app.listen(3000, "10.95.2.163");
	