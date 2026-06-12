import { useForm, Controller } from 'react-hook-form';
import { SignUpSchema, type FormData } from './SignUpSchema';
import { DevTool } from '@hookform/devtools';
import { Field, FieldDescription, FieldLabel } from '../ui/field';
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
import { Link } from 'react-router';
import { Button } from '../ui/button';

const Signup = () => {
  const { register, formState, control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(SignUpSchema),
  });

  const { errors } = formState;

  const handleSignup = (data: FormData) => {
    console.log('SignUp', data);
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
            <FieldDescription>{errors.firstName?.message}</FieldDescription>
          </Field>

          {/* lastName */}
          <Field className="flex-1">
            <FieldLabel htmlFor="lastName"> Last Name</FieldLabel>
            <Input id="lastName" placeholder="Enter your last name" {...register('lastName')} />
            <FieldDescription>{errors.lastName?.message}</FieldDescription>
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
            <FieldDescription>{errors.age?.message}</FieldDescription>
          </Field>

          {/* datepicker */}
          <Field className="flex-1">
            <FieldLabel htmlFor="date"> Date</FieldLabel>
            <Input id="date" type="date" {...register('birthDate', { valueAsDate: true })} />
            <FieldDescription>{errors.birthDate?.message}</FieldDescription>
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
                <Select onValueChange={field.onChange}>
                  <SelectTrigger
                    {...register('gender')}
                    className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-6 text-white transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  >
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
                  <FieldDescription>{errors.gender?.message}</FieldDescription>
                </Select>
              )}
            />
          </Field>

          <Field className="flex-1">
            <FieldLabel htmlFor="contact"> Contact</FieldLabel>
            <Input id="contact" placeholder="Enter your Contact" {...register('contact')} />
            <FieldDescription>{errors.contact?.message}</FieldDescription>
          </Field>
        </div>

        {/* email address and user profile photo url */}
        <div className="flex flex-col gap-5">
          {/* email */}
          <Field className="flex-1">
            <FieldLabel htmlFor="email"> Email</FieldLabel>
            <Input id="email" placeholder="Enter your email" {...register('email')} />
            <FieldDescription>{errors.email?.message}</FieldDescription>
          </Field>

          {/* user profile photo url */}
          <Field className="flex-1">
            <FieldLabel htmlFor="url"> Profile Pic URL</FieldLabel>
            <Input
              id="url"
              placeholder="Enter your profile pic url"
              {...register('profilePhoto')}
            />
            <FieldDescription>{errors.profilePhoto?.message}</FieldDescription>
          </Field>
        </div>

        {/* address */}
        <div className="flex flex-col gap-5">
          {/* street address */}
          <Field className="flex-1">
            <FieldLabel htmlFor="address">Street Address</FieldLabel>
            <Textarea
              id="address"
              placeholder="Enter your street address"
              {...register('address.streetAddress')}
            />
            <FieldDescription>{errors.address?.streetAddress?.message}</FieldDescription>
          </Field>

          {/* state and city */}
          <div className="flex flex-1 gap-5">
            <Field className="flex-1">
              <FieldLabel htmlFor="city"> City</FieldLabel>
              <Input id="city" placeholder="Enter your City" {...register('address.city')} />
              <FieldDescription>{errors.address?.city?.message}</FieldDescription>
            </Field>

            <Field className="flex-1">
              <FieldLabel htmlFor="state"> State</FieldLabel>
              <Input id="state" placeholder="Enter your state" {...register('address.state')} />
              <FieldDescription>{errors.address?.state?.message}</FieldDescription>
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
            <FieldDescription>{errors.password?.message}</FieldDescription>
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
            <FieldDescription>{errors.confirmPassword?.message}</FieldDescription>
          </Field>
        </div>

        {/* link and submitbtn */}
        <div className="flex flex-col gap-5">
          {/* email */}
          <Link to="" className="text-blue-600 underline hover:text-blue-300">
            Already a member? Login here
          </Link>

          {/* user profile photo url */}
          <Field className="flex-1">
            <Button
              id="signupBtn"
              type="submit"
              className="w-full cursor-pointer rounded-lg border border-slate-700 bg-blue-500 px-4 py-8 text-white transition outline-none"
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
