import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Consultation from '../models/Consultation';
import ConsultationsRepository from '../repositories/ConsultationsRepository';

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
      const consultation = consultationsRepository.create({
        user_id,
        doctor,
        specialty,
        description,
        date,
      });

      await consultationsRepository.save(consultation);

      return consultation;
    } catch (error) {
      throw new AppError('Error while the creating a new consultation.');
    }
  }
}

export default CreateConsultationService;
