import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';



function App() {
  const counter = useSelector(state => state.counter)
  const isLoggedIn = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Hello</h1>
      {counter}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLoggedIn ? <h3>works</h3> : null}
    </div >
  );
}

export default App;
