var express = require('express');
var router = express.Router();
var assert = require('assert');

var path = require('path');
var mime = require('mime');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  	{ titre0: 'Team Building',
  	  titre1: 'Team',
  	  titre2: 'Building',
  	  description: 'descritpion formation, présentation',
      layout: 'layoutTB' 
  	});
});

router.get('/download', function(req, res){
	
var file = path.join(__dirname, '/upload-folder/Présentation du programme de formation Centre de Zoopedagogie.pdf');
   res.download(file, function (err) {
       if (err) {
           console.log("Error téléchargement");
           console.log(err);
       } else {
           console.log("Success téléchargement");
       }
   });


});

module.exports = router;
