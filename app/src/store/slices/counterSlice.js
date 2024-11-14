// src/store/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 1, // Valor inicial del contador
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      if (state.counter > 1) {
        state.counter -= 1;
      }
    },
    reset: (state) => {
      state.counter = 1; // Reinicia el contador a 1
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
