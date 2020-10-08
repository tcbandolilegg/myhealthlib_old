import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import CreateUserExamService from '@modules/users/services/CreateUserExamService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const examsRouter = Router();
const upload = multer(uploadConfig);

examsRouter.use(ensureAuthenticated);

examsRouter.post('/', upload.single('exam'), async (request, response) => {
  const createUserExam = new CreateUserExamService();

  const exam = await createUserExam.execute({
    user_id: request.user.id,
    examFilename: request.file.filename,
    description: request.body,
  });

  return response.json(exam);
});

export default examsRouter;
