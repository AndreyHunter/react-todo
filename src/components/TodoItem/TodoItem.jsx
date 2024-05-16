import EditTaskBtn from '../../ui/Buttons/EditTaskBtn/EditTaskBtn';
import DeleteTaskBtn from '../../ui/Buttons/DeleteTaskBtn/DeleteTaskBtn';
import TodoCheckBox from '../../ui/TodoCheckBox/TodoCheckBox';

import styles from './TodoItem.module.scss';

const TodoItem = ({ id, text, isDone, toggleStatus, deleteTodo, editTodo }) => {
    return (
        <li className={styles.item}>
            <div className={styles.text}>
                <TodoCheckBox
                    id={id}
                    checked={isDone}
                    onChange={toggleStatus}
                />
                {text}
            </div>
            <div className={styles.options}>
                <EditTaskBtn  onClick={editTodo} />
                <DeleteTaskBtn onClick={deleteTodo} />
            </div>
        </li>
    );
};

export default TodoItem;
