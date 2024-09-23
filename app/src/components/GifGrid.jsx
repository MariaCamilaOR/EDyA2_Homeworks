import { useEffect, useState } from "react";
import {GifItem} from './GifItem'
import './StyleGifGrid.css'

const key = "7jLF6CNn98PcQoXBeKsZdhAsYFkcOzCR";

const getGifs = async (category) => {
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

    return gifs;
};

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    // nueva función async para obtener los gifs
    const fetchGifs = async () => {
        const gifs = await getGifs(category);
        setImages(gifs);
        console.log(gifs); // imprimir la lista de gifs obtenidos
    };

    useEffect(() => {
        fetchGifs();
    }, [category]);

    return (
        <>
            <h3>{category}</h3>
            <div className="gif-grid">
                {images.map(({ id, title, url }) => (
                    <GifItem key={id} title={title} url={url} />
                ))}
            </div>
        </>
    );
};

