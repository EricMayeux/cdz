var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contactTB', 
  	{ titre0: 'Sortir',
  	  titre1: 'Contact : ',
  	  titre2: 'le centre de ',
  	  description: 'ceci est la description',
  	  layout: 'layoutTB'
  	});
});

module.exports = router;
