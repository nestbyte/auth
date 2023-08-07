import { initContract } from '@ts-rest/core';
import { SignupRequestSchema } from './request';
import { GenericResponseSchema } from './response';

const c = initContract();

export const SignupContract = c.router(
  {
    signup: {
      method: 'POST',
      path: '/signup',
      body: SignupRequestSchema,
      responses: {
        201: GenericResponseSchema,
      },
    },
  },
  {
    strictStatusCodes: true,
  },
);
