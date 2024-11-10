// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import todoReducer from './slices/todoSlice'; // Importa el reducer de todos

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer, // Añade el reducer de todos
  },
});
