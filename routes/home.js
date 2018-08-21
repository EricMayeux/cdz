var express = require('express');
var router = express.Router();
var assert = require('assert');

var path = require('path');
var mime = require('mime');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home',
  	{ titre1: 'Centre de',
      layout: false});
});


module.exports = router;
