var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('intervenant', 
  	{ titre0: 'Accueil',
  	  titre1: 'Votre',
  	  titre2: 'intervenante en',
  	  description: 'ceci est la description'
  	});
});

module.exports = router;
