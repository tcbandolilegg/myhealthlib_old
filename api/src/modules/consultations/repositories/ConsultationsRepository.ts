import { EntityRepository, Repository } from 'typeorm';
import Consultation from '../infra/typeorm/entities/Consultation';

@EntityRepository(Consultation)
class ConsultationsRepository extends Repository<Consultation> {}

export default ConsultationsRepository;
