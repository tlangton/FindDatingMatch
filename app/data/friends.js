// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Franklin",
    "values": [
      "3",
      "3",
      "3",
      "333"
      ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
exports.friendsArray = friendsArray;
