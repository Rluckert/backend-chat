'user strict';
var sql = require('./db');

//Constructor Messages

var Message = function(message){
    this.user_from = message.user_from;
    this.message = message.message;
    this.user_to = message.user_to;
    this.url_image = message.url_image;
    this.date = new Date().toLocaleString();
};

Message.createMessage = function createMessage(newMessage, result) {    
    sql.query("INSERT INTO Message set ?", newMessage, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res.insertId);
            }
        });           
};

Message.getMessagesById = function findMessages(userId, result) {
    let id = userId;
            sql.query(`SELECT * from Message where user_from = ${id} or user_to = ${id} order BY date`, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};

Message.deleteMessageById = function(idMessage, result){
    let id = idMessage;
    sql.query("DELETE FROM Message WHERE id = ?", [id], function (err, res) {
               if(err) {
                   console.log("error: ", err);
                   result(null, err);
               }
               else{
                result(null, res);
               }
           }); 
};


module.exports = Message;