import { useDispatch, useSelector } from 'react-redux';
import {
    deleteTodo,
    editTodo,
    fetchTodos,
    toggleStatusTodo,
} from './../../redux/todos/todos-actins';
import TodosPanel from './TodosPanel';
import { useEffect } from 'react';

const TodosPanelContainer = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const deleteTodoHandler = (id) => {
        dispatch(deleteTodo(id));
    };

    const editTodoHandler = (id, text) => {
        if (!text) return;
        dispatch(editTodo(id, text));
    };

    const toggleStatusHandler = (id, done) => {
        dispatch(toggleStatusTodo(id, done));
    };

    return (
        <TodosPanel
            todos={todos}
            deleteTodo={deleteTodoHandler}
            editTodo={editTodoHandler}
            toggleStatus={toggleStatusHandler}
        />
    );
};

export default TodosPanelContainer;
