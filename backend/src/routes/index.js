const express = require('express');

const usersRouter = require('./users.routes.js');
const sessionsRouter = require('./sessions.routes.js');

const { Router } = express;
const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', sessionsRouter);

module.exports =  routes;
