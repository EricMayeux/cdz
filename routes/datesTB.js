var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	/*
	var db = req.db;
  	var users = db.get('usercollection');
  	users.find({},{}, function(e, docs){
  	*/	
    res.render('datesTB', { 
	  titre0: 'Sortir',
  	  titre1: 'Date et prix du',
  	  titre2: 'Teambuilding',
  	  description: 'descritpion formation, présentation',
      layout: 'layoutTB' 
  	//,'items': docs 
    //  });
  });
});


module.exports = router;
