import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import ConsultationsRepository from '@modules/consultations/infra/typeorm/repositories/ConsultationsRepository';
import CreateConsultationService from '@modules/consultations/services/CreateConsultationService';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const consultationsRouter = Router();

consultationsRouter.use(ensureAuthenticated);

consultationsRouter.post('/', async (request, response) => {
  const { user_id, doctor, specialty, description, date } = request.body;

  const parsedDate = parseISO(date);

  const createConsultation = new CreateConsultationService();

  const consultation = await createConsultation.execute({
    user_id,
    doctor,
    specialty,
    description,
    date: parsedDate,
  });

  return response.json(consultation);
});

consultationsRouter.get('/', async (request, response) => {
  const consultationsRepository = getCustomRepository(ConsultationsRepository);

  const consultations = await consultationsRepository.find();

  return response.json(consultations);
});
export default consultationsRouter;
