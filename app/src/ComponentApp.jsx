import { useState } from "react";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['first category']);
  const [category, setCategory] = useState('');

  const onAddCategory = () => {
    // setCategories([...categories, 'hola'])
    setCategories(list => [...list, category]);
    setCategory('');
  };

  const onSetCategory = (evt) => {
    setCategory(evt.target.value);
  };

  return (
    //esto lo copio y lo pego en gif expert app porque pues es lo mismo pero con botoncito
    <>
      <h1>GifExpert</h1>

      <input type="text" value={category} 
        onChange={(event) => onSetCategory(event)} 
      />

      <button onClick={() => onAddCategory()}>
        Add Category
      </button>

      <ol>
        {
          categories.map((category, key) => (
            <li key={key}>{category}</li>
          ))
        }
      </ol>
    </>
    // hasta aqui copie 
  );
};
