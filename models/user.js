'user strict';
var sql = require('./db');

//Constructor User

var User = function(user){
    this.nick = user.nick;
};

User.createUser = function createUser(newUser, result) {    
    sql.query("INSERT INTO User set ?", newUser, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log('Nick agregado');
                result(null, res.insertId);
            }
        });           
};

User.getUserById = function findUser(userId, result) {
    let id = userId;
    sql.query("SELECT * FROM User WHERE id = ?", [userId], function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};

User.getAllUsers = function getUsers(result) {
    sql.query("SELECT * FROM User", function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};


module.exports = User;