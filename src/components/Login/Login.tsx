import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { LoginSchema, type LoginData } from './LoginSchema';
import { Field, FieldDescription, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { Link } from 'react-router';
import { Button } from '../ui/button';

export const Login = () => {
  const { register, handleSubmit, formState } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  const { errors } = formState;

  const handleLogin = (data: LoginData) => {
    console.log('Login', data);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <form
        action=""
        className="w-full max-w-xl space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl"
        noValidate
        onSubmit={handleSubmit(handleLogin)}
      >
        <div>
          <h2 className="text-3xl font-bold text-white">User Login</h2>
          <p className="mt-1 text-slate-400">Fill in your login details</p>
        </div>

        <div className="flex flex-col gap-5">
          {/* email */}
          <Field className="flex-1">
            <FieldLabel htmlFor="email"> Email</FieldLabel>
            <Input id="email" placeholder="Enter email" {...register('email')} />
            <FieldDescription>{errors.email?.message}</FieldDescription>
          </Field>

          {/* password */}
          <Field className="flex-1">
            <FieldLabel htmlFor="password"> Password</FieldLabel>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register('password')}
            />
            <FieldDescription>{errors.password?.message}</FieldDescription>
          </Field>
        </div>

        {/* link and signin button */}
        <div className="flex flex-col gap-5">
          {/* signup link */}
          <Link to="" className="text-blue-600 underline hover:text-blue-300">
            Already a new member? Register here
          </Link>

          {/* signup button */}
          <Field className="flex-1">
            <Button
              id="loginBtn"
              type="submit"
              className="w-full cursor-pointer rounded-lg border border-slate-700 bg-blue-500 px-4 py-8 text-white transition outline-none"
            >
              Signin
            </Button>
          </Field>
        </div>
      </form>
    </div>
  );
};
