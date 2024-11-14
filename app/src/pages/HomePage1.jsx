import './pagesStyles.css';
import { AddTodoForm } from '../components/AddTodoForm';
import { TodoList } from '../components/TodoList';

export const HomePage = () => {
  return (
    <div className="page-container">
      <h1>TO - DO </h1>
      <p>Todo lo que hay que hacer</p>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};
