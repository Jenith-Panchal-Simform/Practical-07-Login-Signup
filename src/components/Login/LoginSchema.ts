import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.email('Please enter email'),
  password: z.string().regex(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#@$%&? "]).*$/, {
    message:
      'Password should contain one special character,character and number with minimum lenght of 8',
  }),
});

export type LoginData = z.infer<typeof LoginSchema>;
