const express = require('express');
const { Router } = express;
const usersRouter = Router();

const CreateUserController = require('../controllers/users/CreateUserController.js');

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserController();

    const user = await createUser.execute({
      name, email, password
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

module.exports =  usersRouter;