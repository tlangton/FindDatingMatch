
// this page also requires link to original "data"
var myData = require("../data/friends.js");
var friendsArray = myData.friendsArray;

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  // API POST Requests
  app.post("/api/new", function(req, res) {
    friendsArray.push(req.body);
    res.json(friendsArray);
  });

  //Stand back!
  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsArray = [];
    console.log(friendsArray);
  });
};
