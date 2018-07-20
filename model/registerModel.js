var db=require('../db_connection');
var RegisterUsers={
    addPharmacyDetails:function(params,callback){
   	    let sql = "INSERT into pharmacy set ?";
  		var result;
  		let payload = {
  			pharmacy_name : params.p_name,
  			pharmacy_address : params.p_address,
  			pharmacy_city : params.p_city,
  			pharmacy_state: params.p_state,
  			zipcode : params.p_zipcode,
  			email : params.p_email
    	};
		db.query(sql, [payload], function(err) {
  			if(err) {
     			throw err;
  			}
  			//db.end();
  		});
  		callback(null);
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