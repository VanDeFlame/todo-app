import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CreatePage } from './CreatePage';
import { EditPage } from './EditPage';
import { Home } from './Home';
import { NotFound } from 'components/NotFound';


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='new' element={<CreatePage />} />
        <Route path='edit/:todoId' element={<EditPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
