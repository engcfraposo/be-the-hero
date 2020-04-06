const express = require('express');
const OngController = require ('./controllers/OngsControllers')
const IncidentsController = require ('./controllers/IncidentsControllers')
const ProfileController = require ('./controllers/ProfileControllers')
const SessionController = require ('./controllers/SessionControllers')


const routes = express.Router();

routes.use(express.json()) /* Conversão de JSON para JS */


routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);


routes.get('/incidents', IncidentsController.index);

routes.post('/incidents', IncidentsController.create);

routes.delete('/incidents/:id', IncidentsController.delete);


routes.get('/profile', ProfileController.index);


routes.post('/sessions', SessionController.create);

module.exports = routes;

