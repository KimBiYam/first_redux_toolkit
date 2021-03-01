import { decrement } from '@src/modules/counterSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

const CountDecrement = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(decrement())}>-</button>;
};

export default CountDecrement;
