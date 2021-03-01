import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '@src/modules/counterSlice';

const CountIncrement = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(increment())}>+</button>;
};

export default CountIncrement;
