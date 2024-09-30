import { useFetch } from '../hooks';
import './StyleGifGrid.css';

export const GifGrid = ({ category }) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${category.toLowerCase()}`;

    const { data: pokemonData, isLoading, hasError } = useFetch(url);

    if (isLoading) {
        return (<h4>Cargando...</h4>);
    }

    if (hasError) {
        return (<h4>Error: {hasError.message || "Error inesperado"}</h4>);
    }

    return (
        <>
            <h3>{category}</h3>

            {pokemonData && (
                <div className="pokemon-info">
                    <h4>Nombre: {pokemonData.name}</h4>
                    <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                    <p><strong>HP:</strong> {pokemonData.stats[0].base_stat}</p>
                    <p><strong>Ataque:</strong> {pokemonData.stats[1].base_stat}</p>
                </div>
            )}
        </>
    );
};

/*
import { useFetch } from '../hooks';
import { GifItem } from './GifItem';
import './StyleGifGrid.css';

export const GifGrid = ({ category }) => {
    const key = "7jLF6CNn98PcQoXBeKsZdhAsYFkcOzCR";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=25&offset=0&rating=g&lang=en`;

    // Usar el custom hook useFetch para obtener los datos
    const { data: images, isLoading, hasError } = useFetch(url);
    if(isLoading){
        return(<h4>Loading...</h4>)
    }

    if(hasError){
        return(<h4>Error: {hasError.message || "Error inesperado"}</h4>)
    }

    return (
        <>
            <h3>{category}</h3>
                        
            {isLoading && <h4>Loading...</h4>}

            {hasError && <h4>Error: {hasError}</h4>}

            <div className="gif-grid">
                {images && Array.isArray(images.data) && images.data.map(({ id, title, images }) => (
                    <GifItem key={id} title={title} url={images.original.url} />
                ))}
            </div>
        </>
    );
};


const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=25&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        ...img, // esto automaticamente coloca id y title y todo lo que tenga
        url: img.images.downsized_medium.url
    }));

    /*
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    */
