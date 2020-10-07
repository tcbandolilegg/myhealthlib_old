import Consultation from '../models/Consultation';

interface CreateConsultationDTO {
  doctor: string;
  specialty: string;
  date: Date;
}

class ConsultationsRepository {
  private consultations: Consultation[];

  constructor() {
    this.consultations = [];
  }

  public create({
    doctor,
    specialty,
    date,
  }: CreateConsultationDTO): Consultation {
    const consultation = new Consultation({ doctor, specialty, date });

    this.consultations.push(consultation);

    return consultation;
  }

  public all(): Consultation[] {
    return this.consultations;
  }
}

export default ConsultationsRepository;
