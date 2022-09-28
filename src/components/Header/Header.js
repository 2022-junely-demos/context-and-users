import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import './Header.css';
export default function Header() {
  const { user, setUser } = useContext(UserContext);

  const handleClick = async () => {
    await signOut();
    setUser(null);
  };
  return (
    <header>
      <h2>To Do List</h2>
      {user && (
        <>
          <div>Hello {user.email}</div> <button onClick={handleClick}>Sign Out</button>
        </>
      )}
    </header>
  );
}
