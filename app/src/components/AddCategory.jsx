import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (inputValue.trim().length > 0) {
      onAddCategory(inputValue);
      setInputValue(''); // Limpiar el campo de entrada
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Agregar categoría"
        value={inputValue}
        onChange={onInputChange} 
      />
      
      <button onClick={() => onAddCategory()}>
        Add Category
      </button>

      
    </form>
  );
};
