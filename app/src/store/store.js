// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import todoReducer from './slices/todoSlice'; // Ya existente
import counterReducer from './slices/counterSlice'; // Slice del contador
import pokemonReducer from './slices/pokemonSlice'; // Nuevo Slice de Pokémon

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
    counter: counterReducer,
    pokemon: pokemonReducer,
  },
});
