const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
var mongoose = require('mongoose');

const db = require("./config/db")

const port = process.env.port || 8080;


mongoose.connect(db.url);

app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride("X-HTTP-Method-Override"));

app.use(express.static(__dirname + '/public'));

require("./app/routes")(app);
app.listen(port, () => {
    console.log("Listening on " + port);
});

exports = module.exports = app;
