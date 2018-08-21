var db = require('../db_connection');
var md5 = require('md5');
var RegisterUsers = {
    addPharmacyDetails: function (params, callback) {
        var sql = "UPDATE pharma_store set ? where store_id=?";
        var result;
        var payload = {
            status: params.status,
            store_name: params.store_name,
            address: params.address,
            city: params.city,
            state: params.state,
            country: "IN",
            zipcode: params.zipcode,
            email: params.email,
            key_email: params.email,
            phone: params.phone,
            legal_name: params.legal_name,
            lat: params.lat,
            lng: params.lng,
            is_mobile_verified: params.is_mobile_verified,
            is_email_verified: params.is_email_verified,
            phone_verified_time: "now()"
        };
        db.query(sql, [payload, params.store_id], function (err) {
            if (err) {
                throw err;
            }
        });
        callback(null);
    },
    createNewUser: function (params, callback) {
        var sql = "INSERT INTO pharma_users set ?";
        var result;
        var payload = {
            status: "A",
            user_type: params.user_type,
            password : md5(params.password),
            phone : params.phone,
            email : params.email,
        };
        db.query(sql,[payload], function (err) {
            if (err) {
                throw err;
            }
        });
        callback(null);


    },
    getPharmacyDetails: function (params, callback) {
        let sql = "select * from pharmacy where zipcode = ?";
        return db.query(sql, [params], callback);
    },

    success_response: function (data) {
        return "{ 'status' : 1,message : Success ,'data' :" + "data" + "}";
    },
    error_response: function (data) {
        return "{ 'status' : 0,message : Failed ,'data' :" + "data" + "}";
    }
};
module.exports = RegisterUsers;