var db=require('../db_connection');
var addUsers={
         addNewUsers:function(params,callback){
    
   	  var sql = "INSERT into pharma_companies set ?";
  		var result;
  		var payload = {
  			status : params.status,
  			company : params.company,
  			lang_code : params.lang_code,
  			address : params.address 
  			// zipcode : '1123322',
  			// email : 'dss@fdsfdsd.gdf'
    	};

		  db.query(sql, [payload], function(err) {
  			if(err) {
     			throw err;
  			}
  		});
  		callback(null);
      // console.log(sql );
   }, 
   success_response: function(data){
   	   return "{ 'status' : 1,message : Success ,'data' :"+"data"+"}"; 
   },
   error_response: function(data){
   	   return "{ 'status' : 0,message : Failed ,'data' :"+"data"+"}"; 
   }
};
 module.exports=addUsers;