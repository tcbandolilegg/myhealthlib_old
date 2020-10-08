import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Exam from '../infra/typeorm/entities/Exam';
import User from '../infra/typeorm/entities/User';

interface Request {
  user_id: string;
  examFilename: string;
  description: string;
}

class CreateUserExamService {
  public async execute({
    user_id,
    examFilename,
    description,
  }: Request): Promise<Exam> {
    const examsRepository = getRepository(Exam);
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenitcated users can add exams.', 401);
    }

    try {
      const exam = examsRepository.create({
        user_id,
        exam: examFilename,
        description,
      });

      await examsRepository.save(exam);

      return exam;
    } catch (error) {
      throw new AppError('Error while the creating a new consultation.');
    }
  }
}

export default CreateUserExamService;
