var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('definition', 
  	{ titre0: 'Accueil',
  	  titre1: 'Définition',
  	  titre2: 'de la',
  	  description: 'descritpion formation, présentation'
  	});
});

module.exports = router;
