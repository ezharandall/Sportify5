// 10/27/2017 - J Ansley
// I am not sure that this file is used.
// We might be able to delete it.
// 10/27/2017 - J Ansley

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
