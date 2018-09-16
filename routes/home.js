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

router.get('/downloadMaster', function(req, res){
  
var file = path.join(__dirname, '/upload-folder/Memoire_master2_philosophie_Ecole_Normale_Superieure.pdf');
   res.download(file, function (err) {
       if (err) {
           console.log("Error téléchargement");
           console.log(err);
       } else {
           console.log("Success téléchargement");
       }
   });


});

router.get('/downloadInscrition', function(req, res){
  
var file = path.join(__dirname, '/upload-folder/dossier_inscription_formation_zoopedagogie.pdf');
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
