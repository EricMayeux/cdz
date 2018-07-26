var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  	{ titre0: 'Centre de formation',
  	  titre1: 'Centre de',
  	  titre2: 'formation en',
  	  description: 'descritpion formation, présentation'
  	});
});

module.exports = router;
