import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoApp } from './components/TodoApp'; 
import { Father } from './components/Father';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <h1>Challenge 8</h1>
    <TodoApp/>
    <Father />
  </React.StrictMode>
);
