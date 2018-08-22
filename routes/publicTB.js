var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('publicTB', 
  	{ titre0: 'Sortir',
  	  titre1: 'Public visé pour',
  	  titre2: 'le Teambuilding en',
  	  description: 'ceci est la description',
  	  layout: 'layoutTB'
  	});
});

module.exports = router;
