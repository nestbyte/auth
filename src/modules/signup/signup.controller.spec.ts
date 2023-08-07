import { Test, TestingModule } from '@nestjs/testing';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';
import { SignupRepository } from './signup.repository';
import { GlobalProviders } from '../../utils/tests/global.providers';

describe('SignupController', () => {
  let controller: SignupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignupController],
      providers: [...GlobalProviders, SignupService, SignupRepository],
    }).compile();

    controller = module.get<SignupController>(SignupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
