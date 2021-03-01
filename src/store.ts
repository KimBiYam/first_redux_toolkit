import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@src/modules/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
