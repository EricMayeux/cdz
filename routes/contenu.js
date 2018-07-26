var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contenu', 
  	{ titre0: 'Contenu de la formation',
  	  titre1: 'Contenu de la ',
  	  titre2: 'formation en',
  	  description: 'ceci est la description'
  	});
});

module.exports = router;
