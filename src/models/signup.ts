import { UserCredentialsTable } from '../schema/schema';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

export const CreateUserCredentialsModelSchema = createInsertSchema(
  UserCredentialsTable,
).pick({ username: true, email: true, password: true, provider: true });

export type CreateUserCredentialsModel = z.infer<
  typeof CreateUserCredentialsModelSchema
>;
