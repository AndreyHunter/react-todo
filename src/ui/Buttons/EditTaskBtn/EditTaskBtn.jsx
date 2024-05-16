import { FaPen } from "react-icons/fa";
import styles from "./EditTaskBtn.module.scss";

const EditTaskBtn = ({ onClick }) => {
    return (
        <button
            type="button"
            className={styles.btn}
            onClick={onClick}>
            <FaPen />
        </button>
    );
};

export default EditTaskBtn;
