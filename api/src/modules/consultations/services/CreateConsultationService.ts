import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Consultation from '../infra/typeorm/entities/Consultation';
import ConsultationsRepository from '../infra/typeorm/repositories/ConsultationsRepository';

interface Request {
  user_id: string;
  doctor: string;
  specialty: string;
  description: string;
  date: Date;
}

class CreateConsultationService {
  public async execute({
    user_id,
    doctor,
    specialty,
    description,
    date,
  }: Request): Promise<Consultation> {
    const consultationsRepository = getCustomRepository(
      ConsultationsRepository,
    );

    try {
      const consultation = await consultationsRepository.create({
        user_id,
        doctor,
        specialty,
        description,
        date,
      });

      return consultation;
    } catch (error) {
      throw new AppError('Error while the creating a new consultation.');
    }
  }
}

export default CreateConsultationService;
