import { Controller } from '@nestjs/common';
import { SignupService } from './signup.service';
import { tsRestHandler, TsRestHandler } from '@ts-rest/nest';
import { SignupContract } from './rest/contract';

@Controller()
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @TsRestHandler(SignupContract.signup, { validateResponses: true })
  async signup() {
    return tsRestHandler(SignupContract.signup, async (request) => {
      await this.signupService.signup({
        ...request.body,
        provider: 'local',
      });

      return { status: 201, body: { message: 'User created successfully' } };
    });
  }
}
