import { useReducer } from 'react';
import { TodoReducer } from './TodoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Hacer los challenges',
        done: false
    }
];

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState);

    const handleAddTodo = () => {
        const newTodo = {
            id: new Date().getTime(),
            description: 'Nueva tarea',
            done: false
        };

        const action = {
            type: 'ADD_TODO',
            payload: newTodo
        };

        dispatch(action);
    };

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'TOGGLE_TODO',
            payload: id
        });
    };

    const handleRemoveTodo = (id) => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: id
        });
    };

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <button onClick={handleAddTodo}>Agregar Tarea</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span 
                            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
                            onClick={() => handleToggleTodo(todo.id)}
                        >
                            {todo.description}
                        </span>
                        <button onClick={() => handleRemoveTodo(todo.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
