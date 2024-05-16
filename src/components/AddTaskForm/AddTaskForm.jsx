import ApplyBtn from '../../ui/Buttons/ApplyBtn/ApplyBtn';
import ChancelBtn from '../../ui/Buttons/ChancelBtn/CancelBtn';
import AddTaskInput from '../../ui/AddTaskInput/AddTaskInput';

import styles from './AddTaskForm.module.scss';
import { useState } from 'react';

const AddTaskForm = ({ addTodo, closeModal }) => {
    const [taskText, setTaskText] = useState('');

    const addTodoHandler = (e) => {
        e.preventDefault();
        addTodo(taskText);
        setTaskText('');
        closeModal();
    };

    return (
        <form
            className={styles.form}
            onSubmit={addTodoHandler}>
            <AddTaskInput
                value={taskText}
                onChange={setTaskText}
            />
            <div className={styles.buttons}>
                <ChancelBtn onClick={closeModal} />
                <ApplyBtn />
            </div>
        </form>
    );
};

export default AddTaskForm;
