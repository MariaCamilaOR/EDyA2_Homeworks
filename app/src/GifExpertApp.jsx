import { useState } from "react";
import  {AddCategory}  from "./components/AddCategory";
import  {GifGrid}  from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Zodiac']);

  const onAddCategory = (category) => {
    setCategories(list => [category, ...list]);
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