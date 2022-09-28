import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type">
          <Auth user={user} setUser={setUser} />
        </Route>
        <Route path="/tasks" component={Tasks} />
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
