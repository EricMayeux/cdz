var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	/*
	var db = req.db;
  	var users = db.get('usercollection');
  	users.find({},{}, function(e, docs){
  	*/	
    res.render('dates', { 
	  titre0: 'Acceuil',
  	  titre1: 'Date et prix de',
  	  titre2: 'la formation en',
  	  description: 'descritpion formation, présentation'
  	//,'items': docs 
    //  });
  });
});


module.exports = router;
