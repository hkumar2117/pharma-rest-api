var express = require('express');
var RegisterUsers = require('../../model/registerModel');

var router = express.Router();


router.all('/customer', function(req, res, next) {
  if(req.query != '') {
     	RegisterUsers.regsiterAsCustomer(req.query,function(err,rows){ 
          if(err) {
  			res.json(err);
  		  } else {
  			res.json("some message");
  		  }
        });
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