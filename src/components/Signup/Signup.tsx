import { useForm, Controller } from 'react-hook-form';
import { SignUpSchema, type SignUpData } from './SignUpSchema';
import { DevTool } from '@hookform/devtools';
import { Field, FieldError, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '../ui/textarea';
import { Link, useNavigate } from 'react-router';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

const Signup = () => {

  const navigate = useNavigate()

  const { register, formState, control, handleSubmit, reset } = useForm<SignUpData>({
    resolver: zodResolver(SignUpSchema),
    mode: 'onChange',
    defaultValues: {
      termsCheck: false,
    },
  });

  const { errors, isValid, isSubmitting } = formState;

  const handleSignup = (data: SignUpData) => {
    // onsignup store the user is localstorage of storedusers and also set its id in loggedInUser
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (storedUsers) {
      //remove confirm password and termsCheck from object
      // eslint-disable-next-line
      const { confirmPassword, termsCheck, ...updatedData } = data;
      const currentUser = {
        id: crypto.randomUUID(),
        ...updatedData,
      };

      localStorage.setItem('users', JSON.stringify([...storedUsers, currentUser]));
      reset();
      navigate("/login")
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <form
        action=""
        className="w-full max-w-xl space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl"
        noValidate
        onSubmit={handleSubmit(handleSignup)}
      >
        <div>
          <h2 className="text-3xl font-bold text-white">User Information</h2>
          <p className="mt-1 text-slate-400">Fill in your details below</p>
        </div>

        <div className="flex gap-5">
          {/* firstName */}
          <Field className="flex-1">
            <FieldLabel htmlFor="firstName"> First Name</FieldLabel>
            <Input id="firstName" placeholder="Enter your first name" {...register('firstName')} />
            <FieldError>{errors.firstName?.message}</FieldError>
          </Field>

          {/* lastName */}
          <Field className="flex-1">
            <FieldLabel htmlFor="lastName"> Last Name</FieldLabel>
            <Input id="lastName" placeholder="Enter your last name" {...register('lastName')} />
            <FieldError>{errors.lastName?.message}</FieldError>
          </Field>
        </div>

        {/* age and datepicker */}
        <div className="flex gap-5">
          {/* age */}
          <Field className="flex-1">
            <FieldLabel htmlFor="age"> Age</FieldLabel>
            <Input
              id="age"
              type="number"
              placeholder="Enter your age"
              {...register('age', { valueAsNumber: true })}
            />
            <FieldError>{errors.age?.message}</FieldError>
          </Field>

          {/* datepicker */}
          <Field className="flex-1">
            <FieldLabel htmlFor="date"> Date</FieldLabel>
            <Input id="date" type="date" {...register('birthDate', { valueAsDate: true })} />
            <FieldError>{errors.birthDate?.message}</FieldError>
          </Field>
        </div>

        {/* gender and contact */}
        <div className="flex gap-5">
          {/* age */}
          <Field className="flex-1">
            <FieldLabel htmlFor="gender"> Gender</FieldLabel>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-6 text-white transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Gender</SelectLabel>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                  <FieldError>{errors.gender?.message}</FieldError>
                </Select>
              )}
            />
          </Field>

          <Field className="flex-1">
            <FieldLabel htmlFor="contact"> Contact</FieldLabel>
            <Input id="contact" placeholder="Enter your Contact" {...register('contact')} />
            <FieldError>{errors.contact?.message}</FieldError>
          </Field>
        </div>

        {/* email address and user profile photo url */}
        <div className="flex flex-col gap-5">
          {/* email */}
          <Field className="flex-1">
            <FieldLabel htmlFor="email"> Email</FieldLabel>
            <Input id="email" placeholder="Enter your email" {...register('email')} />
            <FieldError>{errors.email?.message}</FieldError>
          </Field>

          {/* user profile photo url */}
          <Field className="flex-1">
            <FieldLabel htmlFor="url"> Profile Pic URL</FieldLabel>
            <Input
              id="url"
              placeholder="Enter your profile pic url"
              {...register('profilePhoto')}
            />
            <FieldError>{errors.profilePhoto?.message}</FieldError>
          </Field>
        </div>

        {/* address */}
        <div className="flex flex-col gap-5">
          {/* street address */}
          <Field className="flex-1">
            <FieldLabel htmlFor="address">Street Address</FieldLabel>
            <Textarea
              className="text-white"
              id="address"
              placeholder="Enter your street address"
              {...register('address.streetAddress')}
            />
            <FieldError>{errors.address?.streetAddress?.message}</FieldError>
          </Field>

          {/* state and city */}
          <div className="flex flex-1 gap-5">
            <Field className="flex-1">
              <FieldLabel htmlFor="city"> City</FieldLabel>
              <Input id="city" placeholder="Enter your City" {...register('address.city')} />
              <FieldError>{errors.address?.city?.message}</FieldError>
            </Field>

            <Field className="flex-1">
              <FieldLabel htmlFor="state"> State</FieldLabel>
              <Input id="state" placeholder="Enter your state" {...register('address.state')} />
              <FieldError>{errors.address?.state?.message}</FieldError>
            </Field>
          </div>
        </div>

        {/* password and confirm password */}
        <div className="flex flex-col gap-5">
          {/* email */}
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

          {/* user profile photo url */}
          <Field className="flex-1">
            <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              {...register('confirmPassword')}
            />
            <FieldError>{errors.confirmPassword?.message}</FieldError>
          </Field>
        </div>

        {/* termsCheck link and signup button */}
        <div className="flex flex-col gap-5">
          {/* terms check */}
          <Field orientation="horizontal">
            <Controller
              name="termsCheck"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="terms-checkbox-basic"
                  checked={field.value ?? false}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <FieldLabel htmlFor="terms-checkbox-basic">Accept terms and conditions</FieldLabel>
            <FieldError>{errors.termsCheck?.message}</FieldError>
          </Field>

          {/* login link */}
          <Link to="/login" className="text-blue-600 underline hover:text-blue-300">
            Already a member? Login here
          </Link>

          {/* signup button */}
          <Field className="flex-1">
            <Button
              id="signupBtn"
              type="submit"
              className="w-full cursor-pointer rounded-lg border border-slate-700 bg-blue-500 px-4 py-8 text-white transition outline-none"
              disabled={!isValid || isSubmitting}
            >
              Signup
            </Button>
          </Field>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Signup;
