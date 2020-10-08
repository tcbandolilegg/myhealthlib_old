import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
  cpf: string;
  birth: string;
  address: string;
  address_two?: string;
  city: string;
  uf: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    cpf,
    birth,
    address,
    address_two,
    city,
    uf,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkEmailExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkEmailExists) {
      throw new AppError('Email address already used.');
    }

    const checkCpfExists = await usersRepository.findOne({
      where: { cpf },
    });

    if (checkCpfExists) {
      throw new AppError('This CPF already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      cpf,
      birth,
      address,
      address_two,
      city,
      uf,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
