import { FaCheck } from "react-icons/fa";

import styles from "./TodoCheckBox.module.scss";

const TodoCheckBox = ({checked, onСange}) => {
    return (
        <div className={styles.box}>
            <input type="checkbox" id="todoCheck" checked={checked} onChange={onСange}/>
            <label htmlFor="todoCheck" className={styles.check}>
               {checked &&  <FaCheck/>}
            </label>
        </div>
    );
};


export default TodoCheckBox;
