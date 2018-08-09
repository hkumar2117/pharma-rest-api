var express = require('express');
var isJsonValid = require('is-valid-json');
var RegisterUser = require('../../model/registerModel');
var router = express.Router()
router.post('/pharmacy/add', function(req, res, next) {

	    if(isJsonValid(req.body)) {
	    	RegisterUser.addPharmacyDetails(req.body,function(err){ 
	          if(err) { 
	  			 res.json(RegisterUser.error_response(0));
	  		  } else {
				 res.json(RegisterUser.success_response(1));
			  }
        	});
	}  else {
	    res.send("Invalid params");
	}
});

router.get('/pharmacy', function(req, res, next) {
	    if(req.query.zipcode  > 0 &&  req.query.zipcode  != 0) {
	    	RegisterUser.getPharmacyDetails(req.query.zipcode,function(err,rows){ 
	             if(err) {
	             	res.json(RegisterUser.error_response(0));
	             }
	             res.json(rows);
			});
	}  else {
	    res.send("Invalid params");
	}
});


router.post('/admin', function(req, res, next) {
  res.send('Register as a admin comes here..');
});



router.post('/vendor', function(req, res, next) {
  res.send('Register as a vendor comes here..');
});

router.all('/*',function(req,res,next) {
	res.send("Invalid Url");
});

module.exports = router;