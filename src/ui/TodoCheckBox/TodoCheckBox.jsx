import { FaCheck } from 'react-icons/fa';

import styles from './TodoCheckBox.module.scss';

const TodoCheckBox = ({ id, checked, onChange }) => {
    return (
        <div className={styles.box}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label
                htmlFor={id}
                className={styles.check}>
                {checked && <FaCheck />}
            </label>
        </div>
    );
};

export default TodoCheckBox;
