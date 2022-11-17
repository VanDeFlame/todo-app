import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { CreatePage } from './CreatePage';
import { EditPage } from './EditPage';
import { Home } from './Home';
import { NotFound } from 'components/NotFound';


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/new' component={CreatePage} />
        <Route path='/edit/:todoId' component={EditPage} />
        <Route path='*' component={NotFound} />
      </Switch>
    </HashRouter>
  )
}

export default App;
