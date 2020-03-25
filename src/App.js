import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import Finances from './containers/Finances/Finances';
//Using React router to route pages
const App = () => {
  return(
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Dashboard} />
      <Route path="/finances" component={Finances} />
    </div>
  </BrowserRouter>
  )
}

export default App;
