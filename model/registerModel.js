var db=require('../db_connection');
var RegisterUsers={
    addPharmacyDetails:function(params,callback){
    
   	  var sql = "INSERT into pharma_companies set ?";
  		var result;
  		var payload = {
  			status : params.status,
  			company : params.company,
  			lang_code : params.lang_code,
  			address : params.address 
    	};

		  db.query(sql, [payload], function(err) {
  			if(err) {
     			throw err;
  			}
  		});
  		callback(null);
      // console.log(sql );
   },
   getPharmacyDetails:function(params,callback){
   	    let sql = "select * from pharmacy where zipcode = ?";
   	    return db.query(sql,[params],callback);
   },

   success_response: function(data){
   	   return "{ 'status' : 1,message : Success ,'data' :"+"data"+"}"; 
   },
   error_response: function(data){
   	   return "{ 'status' : 0,message : Failed ,'data' :"+"data"+"}"; 
   }
};
 module.exports=RegisterUsers;