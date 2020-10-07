import { Router } from 'express';
import { uuid } from 'uuidv4';

const usersRouter = Router();

const users = [];

usersRouter.post('/', (request, response) => {
  const { name, password } = request.body;

  const user = {
    id: uuid(),
    name,
    password,
  };

  users.push(user);

  return response.json(user);
});

export default usersRouter;
