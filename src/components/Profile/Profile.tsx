import { useNavigate } from 'react-router';

import { Button } from '../ui/button';
import type { SignUpData } from '../Signup/SignUpSchema';

type User = {
  id: string;
} & SignUpData;

export const Profile = () => {
  const navigate = useNavigate();

  const id = localStorage.getItem('loggedInUser');
  if (!id) return null;

  const stored: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  const user = id ? (stored.find((u) => u.id === id) ?? null) : null;

  if (!user) {
    return;
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  const date = user?.birthDate ? new Date(user.birthDate).toISOString().split('T')[0] : '';

  const { firstName, lastName, email, age, gender, contact, profilePhotoURL, address } = user;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <div className="w-full max-w-3xl space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
        <div className="flex items-center gap-6">
          <div className="h-32 w-32 shrink-0 rounded-full bg-slate-700 ring-1 ring-slate-800">
            {profilePhotoURL ? (
              <img
                src={profilePhotoURL}
                alt="profile"
                className="h-32 w-32 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-32 w-32 items-center justify-center text-3xl font-bold text-white">
                {(firstName?.[0] || 'U') + (lastName?.[0] || '')}
              </div>
            )}
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white">
              {firstName} {lastName}
            </h2>
            <p className="mt-1 text-slate-400">{email}</p>
            <p className="mt-2 text-slate-400">
              {age ? `Age: ${age}` : ''} {gender ? `• ${gender}` : ''}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-white">
          <div>
            <h3 className="text-sm font-semibold text-slate-400">Contact</h3>
            <p className="mt-1 text-white">{contact || '-'}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-400">Birth Date</h3>
            <p className="mt-1 text-white">{date || '-'}</p>
          </div>

          <div className="col-span-2">
            <h3 className="text-sm font-semibold text-slate-400">Address</h3>
            <p className="mt-1 text-white">
              {address?.streetAddress || '-'} {address?.city ? `, ${address.city}` : ''}{' '}
              {address?.state ? `, ${address.state}` : ''}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
