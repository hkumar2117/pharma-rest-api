var db=require('./db_connection');
var RegisterUsers={
   registerAsCustomer:function(request,callback){
       return db.query("your db query",[request],callback);		
   }
   }

};
 module.exports=RegisterUsers;