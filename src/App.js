import './App.css';
import Header from './components/Header/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Tasks from './components/Tasks';
import { createContext, useState } from 'react';
import Child from './components/Child';
import Parent from './components/Parent';
import Grandchild from './components/Grandchild';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
      </ThemeContext.Provider>
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/parent/child">
          <Parent>
            <Child>
              <Grandchild />
            </Child>
            <Child />
            <Child />
          </Parent>
        </Route>
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
