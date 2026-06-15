import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginSchema, type LoginData } from './LoginSchema';
import { Field, FieldError, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { Link, useNavigate } from 'react-router';
import { Button } from '../ui/button';
import { useEffect } from 'react';

export const Login = () => {
  const navigate = useNavigate();

  // on load of login page if user already loggd in then send hime to profilepage
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) return;
    navigate('/profile');
    console.log('logged', loggedInUser);
  }, [navigate]);

  const { register, handleSubmit, formState, reset, setError } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  const { errors, isSubmitting, isValid } = formState;

  const handleLogin = (data: LoginData) => {
    //get users
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (storedUsers) {
      const loggedInUser = storedUsers.find(
        (user: LoginData) => user.email === data.email && user.password === data.password,
      );
      if (!loggedInUser) {
        setError('root', { type: 'custom', message: 'Please enter valid credentials' });
        return;
      }
      const { id } = loggedInUser;
      localStorage.setItem('loggedInUser', id);
      navigate('/profile');
    }
    reset();
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
            <FieldError>{errors.email?.message}</FieldError>
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
            <FieldError>{errors.password?.message}</FieldError>
          </Field>
        </div>

        {/* link and signin button */}
        <div className="flex flex-col gap-5">
          {/* show errormeesage if invalid credentials */}
          {errors.root && <FieldError>{errors.root?.message}</FieldError>}

          {/* signup link */}
          <Link to="/signup" className="text-blue-600 underline hover:text-blue-300">
            Are you a new member? Register here
          </Link>

          {/* signup button */}
          <Field className="flex-1">
            <Button
              id="loginBtn"
              type="submit"
              className="w-full cursor-pointer rounded-lg border border-slate-700 bg-blue-500 px-4 py-8 text-white transition outline-none"
              disabled={!isValid || isSubmitting}
            >
              Login
            </Button>
          </Field>
        </div>
      </form>
    </div>
  );
};
