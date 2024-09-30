import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; // solo se coloca componetns gracias a lo de barrel


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Charizard']);

  const onAddCategory = (category) => {
    setCategories(list => [category, ...list]);
  };

  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory onAddCategory={onAddCategory} />
      <ol>
        {categories.map((category, index) => (
          <GifGrid category={category} key={index} />
        ))}
      </ol>
    </>
  );
};

