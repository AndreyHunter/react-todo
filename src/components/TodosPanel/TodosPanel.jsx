import Search from "../../ui/Search/Search";
import FilterWidjet from "../FilterWidjet/FilterWidjet";
import AddTaskBtn from "../../ui/Buttons/AddTaskBtn/AddTaskBtn";

import styles from "./TodosPanel.module.scss";
import TodoItem from "../TodoItem/TodoItem";

const TodosPanel = ({ todos }) => {
    return (
        <div className={styles.layaot}>
            <section className={styles.actions}>
                <Search />
                <FilterWidjet />
            </section>
            <ul className={styles.list}>
                <TodoItem/>
            </ul>
            <div className={styles.absolute}>
                <AddTaskBtn />
            </div>
        </div>
    );
};

export default TodosPanel;
