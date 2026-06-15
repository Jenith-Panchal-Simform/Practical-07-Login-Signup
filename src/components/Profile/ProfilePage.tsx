import ProtectedRoute from '@/Routes/ProtectedRoute';
import { Profile } from './Profile';

export const ProfilePage = () => {
  return (
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  );
};
