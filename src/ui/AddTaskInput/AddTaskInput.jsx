import styles from "./AddTaskInput.module.scss";

const AddTaskInput = ({value, onChange}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={styles.input}
        />
    );
};

export default AddTaskInput;
