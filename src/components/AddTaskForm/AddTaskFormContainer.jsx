import { useDispatch } from 'react-redux';
import { postTodo } from '../../redux/todos/todos-actins';
import { setModal } from './../../redux/todos/todo-modal-reducer';

import AddTaskForm from './AddTaskForm';

const AddTaskFormContainer = () => {
    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(setModal(false));
    };

    const addTodo = (text) => {
        dispatch(postTodo(text));
    };

    return (
        <AddTaskForm
            addTodo={addTodo}
            closeModal={closeModalHandler}
        />
    );
};

export default AddTaskFormContainer;
