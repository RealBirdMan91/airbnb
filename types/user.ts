import * as z from 'zod';

export const LoginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export const RegisterUserSchema = LoginUserSchema.extend({
  name: z.string().min(3).max(100),
});

export type RegisterUserInput = z.infer<typeof RegisterUserSchema>;
export type LoginUserInput = z.infer<typeof LoginUserSchema>;
