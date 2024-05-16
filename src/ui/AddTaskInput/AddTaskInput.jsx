import styles from "./AddTaskInput.module.scss";

const AddTaskInput = () => {
    return (
        <input
            type="text"
            className={styles.input}
        />
    );
};

export default AddTaskInput;
