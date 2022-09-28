import { Redirect } from 'react-router-dom';

export default function Tasks({ user }) {
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return <div>Tasks</div>;
}
