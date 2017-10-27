// *************************************************
// This file offers a set of routes for displaying
// and saving data to the db
// *************************************************
//
// Dependencies
// =======================================
// Requiring our models
// var db = require("../models");
// var player = require('./models/player.js');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	// //player.findByID - for specific
	//
	// /* GET home page. */
	// router.get('/', function(req, res, next) {
	// 	player.
	// 	sequelize
	// 	findall
	// 	promise / call back
	//
	// 	.then response - all the data
	//
	// 	res.json(data or something);//revise

	 const player =
	 {
   "id": 158,
    "avatar_url": "resources/avatars/coachSamuels.JPG",
    "name": "Quanzi Samuels",
    "title": "Head Coach",
    "company": "DC Blue Devils",
    "bio": "Coach Samuels is a father of 7, and is actively engaged in the community with assisting youths in their basketball endeavors.",
    "sessions" : "none"
  }
  res.json(player);
});


// Routes
// =============================================
// module.exports = function(app) {
//
  // GET route for getting all of the players
//   app.get("/api/players", function(req, res) {
    // findAll returns all entries for a table when used with no options
//     db.Player.findAll({}).then(function(dbTodo) {
      // We have access to the players as an argument inside of the callback function
//       res.json(dbPlayer);
//     });
//   });
//
  // POST route for saving a new todo
//   app.post("/api/players", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
//     db.Player.create({
//       name: req.body.text,???
//       age: req.body.text,???
//       age: req.body.text,???
//       position: req.body.text,???
//       jersey_number: req.body.text,???
//       complete: req.body.complete???
//     }).then(function(dbPlayer) {
//       // We have access to the new player as an argument inside of the callback function
//       res.json(dbPlayer);
//     });
//   });
//
//   // DELETE route for deleting players. We can get the id of the player to be deleted from
//   // req.params.id
//   app.delete("/api/players/:id", function(req, res) {
//     // We just have to specify which player we want to destroy with "where"
//     db.Todo.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbPlayer) {
//       res.json(dbPlayer);
//     });
//
//   });
//
//   // PUT route for updating players. We can get the updated player data from req.body
//   app.put("/api/players", function(req, res) {
//     // Update takes in an object describing the properties we want to update, and
//     // we use where to describe which objects we want to update
//     db.Player.update({
//       name: req.body.text,???
//       age: req.body.text,???
//       age: req.body.text,???
//       position: req.body.text,???
//       jersey_number: req.body.text,???
//       complete: req.body.complete
//     }, {
//       where: {
//         id: req.body.id
//       }
//     }).then(function(dbPlayer) {
//       res.json(dbPlayer);
//     });
//   });
//
// };


module.exports = router;
