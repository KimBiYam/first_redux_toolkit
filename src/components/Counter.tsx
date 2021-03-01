import React from 'react';
import { RootState } from '@src/store';
import { useSelector } from 'react-redux';
import CountIncrement from './CountIncrement';
import CountDecrement from './CountDecrement';
import CountReset from './CountReset';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <div>
      <h1>Counter</h1>
      <p>{`count  :  ${count}`}</p>
      <CountIncrement />
      <CountDecrement />
      <CountReset />
    </div>
  );
};

export default Counter;
