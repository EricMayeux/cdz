var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('public', 
  	{ titre0: 'Sortir',
  	  titre1: 'Public visé pour',
  	  titre2: 'la formation en',
  	  description: 'ceci est la description'
  	});
});

module.exports = router;
