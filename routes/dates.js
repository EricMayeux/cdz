var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dates', 
  	{ titre0: 'Acceuil',
  	  titre1: 'Dates de la ',
  	  titre2: 'formation en',
  	  description: 'ceci est la description'
  	});
});

module.exports = router;
