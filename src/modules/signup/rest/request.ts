import { z } from 'zod';

export const SignupRequestSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6),
  email: z.string().email(),
});

export type SignupRequest = z.infer<typeof SignupRequestSchema>;
