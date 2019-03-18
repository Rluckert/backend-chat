const express = require('express'),
User = require('../controller/user'),
Message = require ('../controller/message'),
api = express.Router()


api.get('/', async(req, res) =>{
    await res.status(200).send({
        message: 'Api RESTful funcionando'
    })
})


api.post('/user', User.postUser) //Crear Usuario
api.get('/user/:id', User.getUser) //Buscar Usuario
api.get('/users', User.getUsers) //Traer usuarios

api.post('/message', Message.postMessage) //Enviar mensaje
api.get('/messages/:id', Message.getMessages) //Traer mensajes de un usuario
api.delete('/message/:id', Message.deleteMessage) //Eliminar mensaje por id

module.exports = api