import ApplyBtn from "../../ui/Buttons/ApplyBtn/ApplyBtn";
import ChancelBtn from "../../ui/Buttons/ChancelBtn/CancelBtn";
import AddTaskInput from "../../ui/AddTaskInput/AddTaskInput";

import styles from "./AddTaskForm.module.scss";

const AddTaskForm = ({closeModal}) => {
    return (
        <form className={styles.form}>
            <AddTaskInput />
            <div className={styles.buttons}>
                <ChancelBtn onClick={closeModal}/>
                <ApplyBtn />
            </div>
        </form>
    );
};

export default AddTaskForm;
