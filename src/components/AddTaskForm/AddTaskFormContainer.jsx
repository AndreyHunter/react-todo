import { useDispatch } from 'react-redux';
import { addTodoAc } from '../../redux/reducers/todo-reducer';
import { setModal } from './../../redux/reducers/todo-modal-reducer';

import AddTaskForm from './AddTaskForm';

const AddTaskFormContainer = () => {
    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(setModal(false));
    };

    const addTodo = (text) => {
        dispatch(addTodoAc(text));
    };

    return (
        <AddTaskForm
            addTodo={addTodo}
            closeModal={closeModalHandler}
        />
    );
};

export default AddTaskFormContainer;
