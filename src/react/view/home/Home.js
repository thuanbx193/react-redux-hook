import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {useSelector,useDispatch } from 'react-redux';

function Home() {
  const home = useSelector((state) => state['react/home'].home);
  console.log("home-------",home);
  // const dispatch = useDispatch();
  return (
    <div >
        <h1>Home : {home}</h1>
    </div>
  );
}

export default Home;
