import React from 'react';
import Main from './routes/main/main'
import Luck from './routes/luck/luck';

import { HashRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <HashRouter>
      <Route path='/' exact={true} Component={Main}></Route>
      <Route path='/luck' Component={Luck}></Route>
      <Route path='/create-wish' Component={Main}></Route>
      <Route path='/view-wish' Component={Main}></Route>
    </HashRouter>
    </>
  );
}

export default App;
