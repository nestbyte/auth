import { Module } from '@nestjs/common';
import { CoreModule } from '@nestbyte/core';
import { SignupModule } from './modules/signup/signup.module';
import { NestByteOrmModule } from '@nestbyte/orm';
import * as schema from './schema/schema';

@Module({
  imports: [CoreModule, SignupModule, NestByteOrmModule.register('', schema)],
  controllers: [],
  providers: [],
})
export class AuthModule {}
