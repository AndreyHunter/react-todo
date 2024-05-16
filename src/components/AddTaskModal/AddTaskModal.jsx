import AddTaskFormContainer from "./../AddTaskForm/AddTaskFormContainer";
import { IoClose } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { setModal } from "./../../redux/reducers/todo-modal-reducer";

import styles from "./AddTaskModal.module.scss";
import { useEffect, useRef } from "react";

const AddTaskModal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.todoModal.isOpen);

    const closeModalHandler = () => {
        dispatch(setModal(false));
    };

    const modalRef = useRef(null);

    useEffect(() => {
        const closeModal = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                dispatch(setModal(false));
            }
        };

        const closeModalOnKey = (e) => {
            const code = e.code;
            if (code === "Escape") {
                dispatch(setModal(false));
            }
        };

        document.addEventListener("mouseup", closeModal);
        document.addEventListener("keydown", closeModalOnKey);

        return () => {
            document.removeEventListener("mouseup", closeModal);
            document.removeEventListener("keydown", closeModalOnKey);
        };
    }, []);

    return (
        <div className={`${styles.modal} ${isOpen ? styles.active : ""}`}>
            <div
                className={`${styles.content} ${isOpen ? styles.active : ""}`}
                ref={modalRef}>
                <div className={styles.header}>
                    <div className={styles.title}>Add task</div>
                    <button
                        type="button"
                        className={styles.close}
                        onClick={closeModalHandler}>
                        <IoClose />
                    </button>
                </div>
                <div className={styles.body}>
                    <AddTaskFormContainer />
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;
