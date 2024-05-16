import styles from "./CancelBtn.module.scss";

const ChancelBtn = ({ onClick }) => {
    return (
        <button
            type="button"
            className={styles.btn}
            onClick={onClick}>
            Chancel
        </button>
    );
};

export default ChancelBtn;
