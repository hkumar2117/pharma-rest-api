var express = require('express');
var router = express.Router();
var isJsonValid = require('is-valid-json');
var createotp = require('../../model/loginotpModel');
router.get('/otp', function(req, res, next) {

	    if(req.query.email  != '') {
	    	createotp.emailCheck(req.query.email,function(err,rows){ 
	             if(err) { 
	  			 res.json(createotp.error_response(0));
	  		  } else {
				 res.json(createotp.success_response(1));
			  }
			});
	}  else {
	    res.send("Invalid params");
	}
});



module.exports = router;
