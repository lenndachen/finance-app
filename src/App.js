import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Dashboard from './containers/Dashboard/Dashboard';
import Finances from './containers/Finances/Finances';
import Budget from "./containers/Budget/Budget";
import EnterData from "./containers/EnterData/EnterData";
//Using React router to route pages
const App = () => {
  return(
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Dashboard} />
      <Route path="/finances" component={Finances} />
      <Route path="/budget" component={Budget} />
      <Route path="/enterdata" component={EnterData} />
    </div>
  </BrowserRouter>
  )
}

export default App;
