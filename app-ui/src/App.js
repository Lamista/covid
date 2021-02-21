import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './styles/App.css'
import HomePage from './components/HomePage';
import NoMatch from './components/NoMatch';
import CountryPage from './components/CountryPage';

const App = (props) => (
  <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/All%20countries' component={HomePage} />
      <Route path='/:country' component={CountryPage} />
      <Route path='*' component={NoMatch} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App;
