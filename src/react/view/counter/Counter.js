import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {useSelector,useDispatch } from 'react-redux';
import {increment,decrement } from './action';

function Counter() {
  const counter = useSelector((state) => state['react/counter'].counter);
  const home = useSelector((state) => state['react/home'].home);
  const dispatch = useDispatch();
  const  dispatchIncreament =()=> {
    dispatch(increment());
  }
  return (
    <div>
        <h1>Counter : {counter}</h1>
        <button onClick = {dispatchIncreament} >
          INCREMENT
        </button>
        <button onClick = {()=>dispatch(decrement())} >
          DECREMENT
        </button>
      <h1>{home}</h1>
    </div>
  );
}

export default Counter;
