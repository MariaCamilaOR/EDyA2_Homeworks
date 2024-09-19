import { useState } from "react";
import { AddCategory } from "../app/src/components/AddCategory";
import { GifGrid } from "../app/src/components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Zodiac']);

  const onAddCategory = (category) => {
    setCategories(list => [...list, category]);
  };

  return (
    <>
      <h1>GifExpert</h1>

      <AddCategory onAddCategory={onAddCategory} />

      <ol>
        {
          categories.map((category, key) => (
            <GifGrid category={category} key={key} />
          ))
        }
      </ol>
    </>
  );
};
/*este archivo no se usa */ 