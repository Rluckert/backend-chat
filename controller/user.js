'use strict';

var Usuario = require('../models/user');

const postUser = async (req, res) => {
    let newUser = new Usuario(req.body);
    //Error en caso de no enviar datos completos
    if (!newUser.nick) {
        res.status(400).send({ error: true, message: 'Campos incompletos' });
    }
    else {
       await Usuario.createUser(newUser, function (err) {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send({ message: 'Usuario agregado' });
            }
        });
    }
};

const getUser = async (req, res) => {
    await Usuario.getUserById(req.params.idUser, function(err, user) {
        if (err){
            res.status(400).send(err);
        }else{
            res.status(200).json(user);
        }
      });
};

const getUsers = async (req, res) => {
    await Usuario.getAllUsers( function(err, users) {
        if (err){
            res.status(400).send(err);
        }else{
            res.status(200).json(users);
        }
      });
};

module.exports = {
    postUser,
    getUser,
    getUsers
  }

