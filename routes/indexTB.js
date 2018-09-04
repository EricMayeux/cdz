var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indexTB', 
  	{ titre0: 'Sortir',
  	  titre1: 'Team',
  	  titre2: 'Building',
  	  description: 'descritpion formation, présentation',
      layout: 'layoutTB' 
  	});
});

module.exports = router;
