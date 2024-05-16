import { useDispatch } from 'react-redux';
import { setModal } from './../../../redux/todos/todo-modal-reducer';

import styles from './AddTaskBtn.module.scss';

const AddTaskBtn = () => {
    const dispatch = useDispatch();

    const openModalHandler = () => {
        dispatch(setModal(true));
    };

    return (
        <button
            type="button"
            className={styles.btn}
            onClick={openModalHandler}>
            ADD TASK
        </button>
    );
};

export default AddTaskBtn;
