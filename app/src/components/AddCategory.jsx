import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (inputValue.trim().length > 0) {
      onAddCategory(inputValue);
      setInputValue(""); // Limpiar el campo de entrada
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Agregar Pokemon"
        value={inputValue}
        onChange={onInputChange}
      />
      {/*el formulario se encarga de añadir la categoría cuando se envía el formulario:
      <button onClick={() => onAddCategory()}>
        Add Category
      </button>*/}
    </form>
  );
};
