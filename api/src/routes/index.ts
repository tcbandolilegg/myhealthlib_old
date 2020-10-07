import { Router } from 'express';
import consultationsRouter from './consultations.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/consultations', consultationsRouter);

export default routes;
