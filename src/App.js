import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Tasks from './components/Tasks';
import { useState } from 'react';
import { getUser } from './services/auth';

function App() {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);
  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route path="/auth/:type">
          <Auth user={user} setUser={setUser} />
        </Route>
        <Route path="/tasks">
          <Tasks user={user} setUser={setUser} />
        </Route>
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
