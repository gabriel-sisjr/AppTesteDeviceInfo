import React from 'react';
import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';
import {useAuth} from '../context/auth';

const Routes: React.FC = () => {
  const {signed} = useAuth();

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
