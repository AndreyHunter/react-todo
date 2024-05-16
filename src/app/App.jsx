import ActionsPanel from '../components/ActionsPanel/ActionsPanel';
import AddTaskModal from '../components/AddTaskModal/AddTaskModal';
import TodosPanelContainer from '../components/TodosPanel/TodosPanelContainer';

import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.app}>
            <div className={styles.layaot}>
                <ActionsPanel />
                <TodosPanelContainer />
                <AddTaskModal />
            </div>
        </div>
    );
};

export default App;
