import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext, useUser } from '../context/UserContext';

export default function Tasks() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return <div>Tasks</div>;
}
