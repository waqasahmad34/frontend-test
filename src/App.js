import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './container/Home';
import CreateTask from './container/CreateTask';
import ListTasks from './container/ListTasks';
import NotFound from './container/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/list-tasks" component={ListTasks}/>
          <Route exact path="/create-task" component={CreateTask}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
