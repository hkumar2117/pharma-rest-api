var db=require('../db_connection');
var createOtp ={
	emailCheck:function(params, callback){		 
		var sql = "select * from pharma_companies where email = ?";
		db.query(sql,[params],function(err,results){
			if(err){
				throw err;
			} else {
				if(results  == ''){
					var val = Math.floor(1000 + Math.random() * 9000);
					if(val != '') {
						var sql = "INSERT INTO otp_expiry set ?";
						var result;
						var payload = {
							id:'0',
							otp : val,
							is_expired:'0',
							create_at:'2018-08-02 17:05:20'		
						};
						db.query(sql,[payload],function(err,results){	 
						});
						callback(null,results);
					}
				} 
			}
		});
	} ,
	success_response: function(data){
		return "{ 'status' : 1,message : Success ,'data' :"+"OTP send to your mobile !"+"}"; 
	},
	error_response: function(data){
		return "{ 'status' : 0,message : Failed ,'data' :"+"data"+"}"; 
	}
};
module.exports=createOtp;