import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'
import HomePage from './components/HomePage';
import NoMatch from './components/NoMatch';

const App = (props) => (
  <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='*' component={NoMatch} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App;
