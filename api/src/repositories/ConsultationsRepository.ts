import { EntityRepository, Repository } from 'typeorm';
import Consultation from '../models/Consultation';

@EntityRepository(Consultation)
class ConsultationsRepository extends Repository<Consultation> {}

export default ConsultationsRepository;
