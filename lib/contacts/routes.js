const express = require('express');
const ctrl = require('./controllers');

const routes = new express.Router();

routes.get('/contacts', ctrl.list);
routes.post('/contacts', ctrl.create);

routes.get('/contacts/:contactId', ctrl.details);
routes.patch('/contacts/:contactId', ctrl.update);
routes.delete('/contacts/:contactId', ctrl.remove);

module.exports = routes;
