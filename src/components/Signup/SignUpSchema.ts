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
    gender: z.enum(['male', 'female', 'other'], { message: 'Select the gender' }),
    contact: z.string().regex(/^\d{10}$/, {
      message: 'Contact number must be exactly 10 digits',
    }),
    profilePhotoURL: z
      .url('Enter valid URL')
      .refine((url) => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url), {
        message: 'URL must point to an image having jpg|jpeg|png|gif|webp|svg in it',
      }),
    birthDate: z.date('Please select a birth date'),
    password: z.string().regex(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#@$%&? "]).*$/, {
      message:
        'Password should contain one special character,character and number with minimum lenght of 8',
    }),
    confirmPassword: z.string().regex(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#@$%&? "]).*$/, {
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
