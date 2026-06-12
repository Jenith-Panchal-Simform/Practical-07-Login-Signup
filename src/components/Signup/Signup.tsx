import { useForm } from 'react-hook-form';
import type { FormData } from './SignUpSchema';
import { DevTool } from '@hookform/devtools';

const Signup = () => {
  const { control } = useForm<FormData>({});
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <form
        action=""
        className="w-full max-w-xl space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl"
      >
        <div>
          <h2 className="text-3xl font-bold text-white">User Information</h2>
          <p className="mt-1 text-slate-400">Fill in your details below</p>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Signup;
