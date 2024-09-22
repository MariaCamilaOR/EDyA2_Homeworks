import { useEffect, useState } from "react";

const key = "7jLF6CNn98PcQoXBeKsZdhAsYFkcOzCR"

const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=25&offset=0&rating=g&lang=en`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifs;
};

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="gif-grid">
        {images.map(({ id, title, url }) => (
          <div key={id} className="gif-item">
            <img src={url} alt={title} />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

