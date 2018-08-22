var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('principeTB', 
  	{ titre0: 'Sortir',
  	  titre1: 'Principe',
  	  titre2: 'de notre',
  	  description: 'descritpion formation, présentation',
  	  layout: 'layoutTB'
  	});
});

module.exports = router;
