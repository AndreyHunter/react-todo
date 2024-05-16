import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoAc, editTodoAc, toggleStatusAc } from './../../redux/reducers/todo-reducer';
import TodosPanel from './TodosPanel';

const TodosPanelContainer = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    const deleteTodoHandler = (id) => {
        dispatch(deleteTodoAc(id));
    };

    const editTodoHandler = (id, text) => {
        if (!text) return;
        dispatch(editTodoAc(id, text));
    };

    const toggleStatusHandler = (id) => {
        dispatch(toggleStatusAc(id));
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
