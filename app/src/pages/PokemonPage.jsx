// src/pages/PokemonPage.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, reset } from '../store/slices/counterSlice';
import { startLoading, setPokemonData, setPokemonError } from '../store/slices/pokemonSlice';

const PokemonPage = () => {
  const dispatch = useDispatch();

  const { counter } = useSelector((state) => state.counter);
  const { data, isLoading, hasError } = useSelector((state) => state.pokemon);

  useEffect(() => {
    console.log('Estado de la caché:', data);
    if (data[counter]) {
      console.log('Datos del Pokémon recuperados de la caché:', data[counter]);
      return;
    }
    const fetchPokemonData = async () => {
      dispatch(startLoading());
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
        if (!response.ok) {
          throw new Error('Pokémon no encontrado');
        }
        const result = await response.json();
        console.log('Datos del Pokémon nuevos desde la API:', result);
        dispatch(setPokemonData({ id: counter, data: result }));
      } catch (error) {
        dispatch(setPokemonError(error.message));
      }
    };

    fetchPokemonData();
  }, [counter, dispatch, data]);

  return (
    <div className="pokemon-page">
      <h1>Pokémon con ID: {counter}</h1>
      <div className="buttons">
        <button onClick={() => dispatch(increment())}>Siguiente Pokémon</button>
        <button onClick={() => dispatch(reset())}>Resetear Contador</button>
      </div>
      <hr />
      {isLoading && <p>Cargando...</p>}
      {hasError && <p>Error: {hasError}</p>}
      {data[counter] && (
        <blockquote>
          <p>
            <strong>Nombre:</strong> {data[counter].name}
          </p>
          <p>
            <strong>Altura:</strong> {data[counter].height}
          </p>
          <p>
            <strong>Peso:</strong> {data[counter].weight}
          </p>
          <img
            src={data[counter].sprites.front_default}
            alt={data[counter].name}
            width="150"
          />
        </blockquote>
      )}
    </div>
  );
};

export default PokemonPage;
