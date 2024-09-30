import { useReducer } from 'react';
import { TodoReducer } from './TodoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Hacer los challenges',
        done: false
    }
];

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState);

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'ADD_TODO',
            payload: newTodo
        });
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

            <TodoAdd handleAddTodo={handleAddTodo} />
            <TodoList 
                todos={todos} 
                handleToggleTodo={handleToggleTodo}
                handleRemoveTodo={handleRemoveTodo} 
            />
        </div>
    );
};
