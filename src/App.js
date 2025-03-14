import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FormSPT from './components/FormSPT';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/form-spt" component={FormSPT} />
      </Switch>
    </Router>
  );
}

export default App;