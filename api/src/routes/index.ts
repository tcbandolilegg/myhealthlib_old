import { Router } from 'express';
import consultationsRouter from './consultations.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import examsRouter from './exams.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/consultations', consultationsRouter);
routes.use('/exams', examsRouter);

export default routes;
