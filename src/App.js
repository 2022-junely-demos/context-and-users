import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/tasks" component={Tasks} />
      </Switch>
    </div>
  );
}

export default App;
