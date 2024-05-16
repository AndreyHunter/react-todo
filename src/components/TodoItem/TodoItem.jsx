import EditTaskBtn from "../../ui/Buttons/EditTaskBtn/EditTaskBtn";
import DeleteTaskBtn from "../../ui/Buttons/DeleteTaskBtn/DeleteTaskBtn";
import TodoCheckBox from "../../ui/TodoCheckBox/TodoCheckBox";

import styles from './TodoItem.module.scss';

const TodoItem = ({text, setDone, deleteTask, editTask}) => {
    return (
        <li className={styles.item}>
            <div className={styles.text}>
                <TodoCheckBox checked={true}/>
                {text}
            </div>
            <div className={styles.options}>
                <EditTaskBtn />
                <DeleteTaskBtn />
            </div>
        </li>
    );
};


export default TodoItem;