import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';
import { SignupRepository } from './signup.repository';

@Module({
  controllers: [SignupController],
  providers: [SignupService, SignupRepository],
  exports: [],
})
export class SignupModule {}
