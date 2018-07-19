var express = require('express');
var RegisterUser = require('../../model/registerModel');

var router = express.Router();


router.all('/',function(req,res,next) {
	res.send("Invalid Url");
});


router.all('/customer', function(req, res, next) {
  if(req.query != '') {
     	 res.send(RegisterUser.printHello());
      }	 else {
         res.send('Invalid parameter');
      }
});



router.post('/admin', function(req, res, next) {
  res.send('Register as a admin comes here..');
});



router.post('/vendor', function(req, res, next) {
  res.send('Register as a vendor comes here..');
});


module.exports = router;