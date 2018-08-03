var db=require('../db_connection');

var Search= {
    geoSearch: function (params, callback) {
        if (params != '') {
            var sql = "SELECT email,pharmacy_name,pharmacy_address,pharmacy_city,(3959 * acos( cos(radians(?)) * cos(radians(lat)) * cos(radians(lng) - radians(?)) + sin(radians(?))* sin(radians(lat)))) AS distance" +
                " FROM pharmacy HAVING distance < 30 ORDER BY distance LIMIT 0 , 20";

            return db.query(sql, [params.lat, params.lng, params.lat], callback);
        }
    },
    customSearch(params,callback){
      if(params.key != "" && params.val != ''){
          return db.query("Select * from pharmacy where "+params.key+"=? limit "+params.limit+",10",[params.val],callback);
      } else {
          callback(null,"Invalid Params");
      }
    }
};
module.exports = Search;