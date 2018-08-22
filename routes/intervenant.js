var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('intervenant', 
  	{ titre0: 'Sortir',
  	  titre1: 'Vos',
  	  titre2: 'intervenants en',
  	  description: 'ceci est la description'
  	});
});

module.exports = router;
