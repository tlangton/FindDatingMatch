var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var myData = require("./app/data/friends.js");
//exported common stuff from myModules
var friendsArray = myData.friendsArray;

console.log(friendsArray);
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// app.get("/", function(req, res) {
//   res.send("Hiya Froggy.");
// });

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8080;

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require("./app/routing/api-Routes")(app);
require("./app/routing/html-Routes")(app);


app.get("/", function(req, res) {
  res.send("hi")

});



// start me up!
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
