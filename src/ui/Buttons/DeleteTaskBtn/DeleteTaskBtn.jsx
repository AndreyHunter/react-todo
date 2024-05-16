import { MdDelete } from 'react-icons/md';

import styles from './DeleteTaskBtn.module.scss';

const DeleteTaskBtn = ({onClick}) => {
    return (
        <button type="button" className={styles.btn} onClick={onClick}>
            <MdDelete/>
        </button>
    );
};


export default DeleteTaskBtn;