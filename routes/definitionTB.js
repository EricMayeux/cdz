var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('definitionTB', 
  	{ titre0: 'Sortir',
  	  titre1: 'Définition',
  	  titre2: 'de la',
  	  description: 'descritpion formation, présentation',
  	  layout: 'layoutTB'
  	});
});

module.exports = router;
