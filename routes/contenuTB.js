var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contenuTB', 
  	{ titre0: 'Sortir',
  	  titre1: 'Contenu du ',
  	  titre2: 'Teambuilding',
  	  description: 'ceci est la description',
  	  layout: 'layoutTB'
  	});
});


module.exports = router;
