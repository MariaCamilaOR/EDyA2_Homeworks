import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
  const { data: pokemon, isLoading, hasError } = useFetch(url);

  return (
    <>
      <h1>Pokemon con ID: {counter}</h1>
      <hr />
      {isLoading ? (
        <h4>Cargando...</h4>
      ) : (
        <blockquote>
          <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
          <p>{pokemon?.name}</p>
          <p>ID: {pokemon?.id}</p>
          <p>Altura: {pokemon?.height}</p>
          <p>Peso: {pokemon?.weight}</p>
        </blockquote>
      )}
      {hasError && <h4>Error: {hasError.message || "Error inesperado"}</h4>}

      <button onClick={increment}>Siguiente Pokémon</button>
      <button onClick={decrement}>Anterior Pokémon</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};
