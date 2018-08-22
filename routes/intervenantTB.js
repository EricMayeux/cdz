var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('intervenantTB', 
  	{ titre0: 'Sortir',
  	  titre1: 'Vos',
  	  titre2: 'intervenants en',
  	  description: 'ceci est la description',
  	  layout: 'layoutTB'
  	});
});

module.exports = router;
