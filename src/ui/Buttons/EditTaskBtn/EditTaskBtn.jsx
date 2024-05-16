import { FaPen } from "react-icons/fa";
import styles from "./EditTaskBtn.module.scss";

const EditTaskBtn = ({ onclick }) => {
    return (
        <button
            type="button"
            className={styles.btn}
            onClick={onclick}>
            <FaPen />
        </button>
    );
};

export default EditTaskBtn;
