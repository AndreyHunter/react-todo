import Search from '../../ui/Search/Search';
import FilterWidjet from '../FilterWidjet/FilterWidjet';
import AddTaskBtn from '../../ui/Buttons/AddTaskBtn/AddTaskBtn';

import styles from './TodosPanel.module.scss';
import TodoItem from '../TodoItem/TodoItem';

const TodosPanel = ({ todos, deleteTodo, editTodo, toggleStatus }) => {
    return (
        <div className={styles.layaot}>
            <section className={styles.actions}>
                <Search />
                <FilterWidjet />
            </section>
            <ul className={styles.list}>
                {todos &&
                    todos.map((task) => (
                        <TodoItem
                            key={task.id}
                            id={task.id}  
                            text={task.text}
                            deleteTodo={() => deleteTodo(task.id)}
                            editTodo={() => editTodo(task.id, prompt())}
                            toggleStatus={() => toggleStatus(task.id, task.done)}
                            isDone={task.done}
                        />
                    ))}
            </ul>
            <div className={styles.absolute}>
                <AddTaskBtn />
            </div>
        </div>
    );
};

export default TodosPanel;
