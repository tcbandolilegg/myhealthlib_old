import { uuid } from 'uuidv4';

class Consultation {
  id: string;

  doctor: string;

  specialty: string;

  date: Date;

  constructor({ doctor, specialty, date }: Omit<Consultation, 'id'>) {
    this.id = uuid();
    this.doctor = doctor;
    this.date = date;
    this.specialty = specialty;
  }
}

export default Consultation;
