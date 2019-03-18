'use strict';

var Message = require('../models/message');

const postMessage = async (req, res) => {
    let newMessage = new Message(req.body);
    //Error en caso de no enviar datos completos
    if(!newMessage.url_image){
        newMessage.url_image = null;
    }
    if (!newMessage.user_from || !newMessage.user_to || !newMessage.message ) {
        res.status(400).send({ error: true, message: 'Campos incompletos' });
    }
    else {
       await Message.createMessage(newMessage, function (err) {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send({ message: 'Mensaje enviado' });
            }
        });
    }
};

const getMessages = async (req, res) => {
    await Message.getMessagesById(req.params.id, function(err, messages) {
        if (err){
            res.status(400).send(err);
        }else{
            res.status(200).json(messages);
        }
      });
};

const deleteMessage = async (req, res) => {
    await Message.deleteMessageById(req.params.id, function(err, messages) {
        if (err){
            res.status(400).send(err);
        }else{
            res.status(200).send({ message: 'Mensaje eliminado' });
        }
      });
};




module.exports = {
    postMessage,
    getMessages,
    deleteMessage
  }
