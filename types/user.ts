import * as z from 'zod';

export const RegisterUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
  name: z.string().min(2).max(50),
});

export type RegisterUserInput = z.infer<typeof RegisterUserSchema>;
