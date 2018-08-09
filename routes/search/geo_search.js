var express = require('express');
var isJsonValid = require('is-valid-json');
var searchModel = require('../../model/searchModel');

var searchRouter = express.Router();



searchRouter.get('/nearby',function(req, res, next){
      if(req.query.lat >= 0 && req.query.lng  >= 0) {
       		searchModel.geoSearch(req.query,function(err,data){
       				if(err) {
                        res.json(err);
                    }
                    res.json(data);
       		});
	  } else {
          res.send("Invalid Params! Missed lat/lng information");
      }
});

searchRouter.get('/pharmacy/:key/:val/:limit',function(req, res, next){
    if(req.query!='') {
        searchModel.customSearch(req.params,function(err,data){
            if(err) {
                res.json(err);
            }
            res.json(data);
        });
    } else {
        res.send("Invalid Params! Missed lat/lng information");
    }
});

searchRouter.all('/*',function(req,res,next) {
  res.send("Invalid Url");
});

module.exports = searchRouter;
