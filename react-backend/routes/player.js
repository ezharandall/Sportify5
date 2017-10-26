var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
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

module.exports = router;