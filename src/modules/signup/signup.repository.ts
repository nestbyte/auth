import { Injectable } from '@nestjs/common';
import { InjectDb, NestByteOrmDb } from '@nestbyte/orm';
import { UserCredentialsTable } from '../../schema/schema';
import { CreateUserCredentialsModel } from '../../models/signup';

@Injectable()
export class SignupRepository {
  constructor(@InjectDb() private db: NestByteOrmDb) {}

  async createUser(createUserCredentialsModel: CreateUserCredentialsModel) {
    await this.db
      .insert(UserCredentialsTable)
      .values(createUserCredentialsModel)
      .execute();
  }
}
