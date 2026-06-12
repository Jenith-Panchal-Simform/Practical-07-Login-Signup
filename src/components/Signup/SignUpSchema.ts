import { z } from 'zod';
export const SignUpSchema = z
  .object({
    firstName: z.string().min(1, 'FirstName is required'),
    lastName: z.string().min(1, 'LastName is required'),
    email: z.email('Enter valid email'),
    address: z.object({
      state: z.string().min(1, 'Enter State'),
      city: z.string().min(1, 'Enter City'),
      streetAddress: z.string().min(1, 'Enter Address'),
    }),
    age: z.number('Enter age'),
    gender: z.enum(['male', 'female', 'others'], { message: 'Select the gender' }),
    contact: z
      .string()
      .min(10, 'Enter valid Contact Number')
      .regex(/^\+?\d+$/, {
        message: "Phone number must contain only digits and an optional leading '+'",
      }),
    profilePhoto: z.url('Enter valid URL'),
    birthDate: z.coerce.date('Please select a birth date'),
    password: z.string().regex(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/, {
      message:
        'Password should contain one special character,character and number with minimum lenght of 8',
    }),
    confirmPassword: z.string().regex(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/, {
      message:
        'Password should contain one special character,character and number with minimum lenght of 8',
    }),
    termsCheck: z
      .boolean()
      .refine((value) => value === true, { message: 'You must accept the terms and conditions' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirmPassword'],
  });

export type SignUpData = z.infer<typeof SignUpSchema>;
