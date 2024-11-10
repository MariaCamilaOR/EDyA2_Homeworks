// src/components/TodoList.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos, toggleTodo } from '../store/slices/todoSlice';
import { db } from '../firebase/config';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import './TodoList.css';

export const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state) => state.todos);

  useEffect(() => {
    const q = query(collection(db, 'todos'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosData = [];
      querySnapshot.forEach((doc) => {
        todosData.push({ id: doc.id, ...doc.data() });
      });
      dispatch(setTodos(todosData));
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          {todo.text}
        </li>
      ))}
    </ul>
  );
};
