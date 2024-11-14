import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {}, // Almacenará los Pokémon en caché
  isLoading: false,
  hasError: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
      state.hasError = null;
    },
    setPokemonData: (state, action) => {
      const { id, data } = action.payload;
      state.data[id] = data; // Almacena los datos en caché por ID
      state.isLoading = false;
    },
    setPokemonError: (state, action) => {
      state.hasError = action.payload;
      state.isLoading = false;
    },
    clearPokemonData: (state) => {
      state.data = {}; // Limpia la caché
    },
  },
});

export const { startLoading, setPokemonData, setPokemonError, clearPokemonData } = pokemonSlice.actions;

export default pokemonSlice.reducer;
