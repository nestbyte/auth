import { Test, TestingModule } from '@nestjs/testing';
import { SignupService } from './signup.service';
import { GlobalProviders } from '../../utils/tests/global.providers';
import { SignupRepository } from './signup.repository';

describe('SignupService', () => {
  let service: SignupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...GlobalProviders, SignupService, SignupRepository],
    }).compile();

    service = module.get<SignupService>(SignupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
