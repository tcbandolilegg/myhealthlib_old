const express = require('express');
const { Router } = express;
const sessionsRouter = Router();

const CreateSessionController = require('../controllers/sessions/CreateSessionController.js');

sessionsRouter.get('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const createSession = new CreateSessionController();

    const user = await createSession.execute({
      email, password
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

module.exports =  sessionsRouter;