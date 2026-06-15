import React from 'react';
import { Navigate } from 'react-router';

type Props = {
    children: React.ReactElement;
};

export default function ProtectedRoute({ children }: Props) {
    const loggedIn = Boolean(localStorage.getItem('loggedInUser'));
    if (!loggedIn) return <Navigate to="/login" replace />;
    return children;
}
