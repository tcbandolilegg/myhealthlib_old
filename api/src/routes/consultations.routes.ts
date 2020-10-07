import { Router } from 'express';
import { parseISO } from 'date-fns';
import ConsultationsRepository from '../repositories/ConsultationsRepository';

const consultationsRouter = Router();
const consultationsRepository = new ConsultationsRepository();

consultationsRouter.post('/', (request, response) => {
  const { doctor, specialty, date } = request.body;

  const parsedDate = parseISO(date);

  const consultation = consultationsRepository.create({
    doctor,
    specialty,
    date: parsedDate,
  });

  return response.json(consultation);
});

consultationsRouter.get('/', (request, response) => {
  const consultations = consultationsRepository.all();

  return response.json(consultations);
});
export default consultationsRouter;
