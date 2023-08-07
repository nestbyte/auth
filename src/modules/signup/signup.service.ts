import { Injectable } from '@nestjs/common';
import { SignupRepository } from './signup.repository';
import { CreateUserCredentialsModel } from '../../models/signup';

@Injectable()
export class SignupService {
  constructor(private signupRepository: SignupRepository) {}

  async signup(createUserCredentialsModel: CreateUserCredentialsModel) {
    await this.signupRepository.createUser(createUserCredentialsModel);
  }
}
