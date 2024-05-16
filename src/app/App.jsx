import ActionsPanel from "../components/ActionsPanel/ActionsPanel";
import AddTaskModal from "../components/AddTaskModal/AddTaskModal";
import TodosPanel from "../components/TodosPanel/TodosPanel";

import styles from "./App.module.scss";

const App = () => {
    return (
        <div className={styles.app}>
            <div className={styles.layaot}>
                <ActionsPanel/>
                <TodosPanel/>
                <AddTaskModal/>
            </div>
        </div>
    );
};

export default App;
