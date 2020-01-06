import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import {useSelector,useDispatch } from 'react-redux';

import { Counter,Home } from './react/view';

function App() {
  return (
    <div>
      <Counter/>
      <Home/>
    </div>
  );
}

export default App;
