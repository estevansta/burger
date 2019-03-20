// Import MySQL connection.
var connection = require("../config/connection");


// ORM.JS from CATS activity as the skeleton of this code
// three "?"s are needed to pass the three values of ID, burger_name, and if it is devoured or NOT
// function below uses SQL syntax to help print our data onto our webpage

function printQs(num) {
  var array = [];
  for (var i = 0; i < num; i++) {
    // pushing the "?" from the empty array defined 
    array.push("?");
  }
    //return the results to the toString callback
  return array.toString();
}

// Helper function to convert object key/value pairs to SQL syntax code from CAT activity
function objToSql(ob) {
  var array = [];

  // loop through the keys and push the key/value as a string int array
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // keeps string with spaces within quotes
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      array.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// CRUD ORN attempt;  
var orm = {
  all: function(tableInput, cb) {
 
  },
  create: function(table, cols, vals, cb) {
  
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(table, objColVals, condition, cb) {
 
  },
  delete: function(table, condition, cb) {

  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
