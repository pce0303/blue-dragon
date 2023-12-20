import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './routes/main/main';
import Luck from './routes/luck/luck';
import Create from './routes/wish/create';
import View from './routes/wish/view';
import Login from './routes/user/login';
import Register from './routes/user/register';
import User from './components/user';

function App() {
  return (
    <>
    <User />
    <HashRouter>
      <Routes>
        <Route path='/' exact={true} Component={Main} />
        <Route path='/luck' Component={Luck} />
        <Route path='/create' Component={Create} />
        <Route path='/view' Component={View} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
      </Routes>
    </HashRouter>
    </>
    
  );
}

export default App;
