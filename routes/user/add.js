var express = require('express');
var router = express.Router();
var isJsonValid = require('is-valid-json');
var addUsers = require('../../model/addModel');
router.post('/create/user', function(req, res, next) {
	 if(isJsonValid(req.body)) {
	    	addUsers.addNewUsers(req.body,function(err){ 
	          if(err) { 
	  			 res.json(addUsers.error_response(0));
	  		  } else {
				 res.json(addUsers.success_response(1));
			  }
        	});
	}  else {
	    res.send("Invalid params");
	}
});


module.exports = router;

