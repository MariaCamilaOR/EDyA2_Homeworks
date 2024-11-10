// src/components/AddTodoForm.jsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/slices/todoSlice';
import './AddTodoForm.css';
export const AddTodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.todos.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={loading}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Agregando...' : 'Agregar'}
      </button>
    </form>
  );
};
