import { reset } from '@src/modules/counterSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

const CountReset = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(reset())}>Reset</button>;
};

export default CountReset;
