var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home',
  	{ titre1: 'Centre de',
      layout: false});
});

router.get('/download', function(req, res){
	
var file = path.join(__dirname, '/upload-folder/Presentation_programme_CDZ.pdf');
   res.download(file, function (err) {
       if (err) {
           console.log("Error téléchargement");
           console.log(err);
       } else {
           console.log("Success téléchargement");
       }
   });


});

router.get('/downloadTB', function(req, res){
	
var file = path.join(__dirname, '/upload-folder/Presentation_programme_CDZ.pdf');
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
