import { useDispatch } from "react-redux";
import { setModal } from "./../../redux/reducers/todo-modal-reducer";

import AddTaskForm from "./AddTaskForm";

const AddTaskFormContainer = () => {
    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(setModal(false));
    };

    return <AddTaskForm closeModal={closeModalHandler} />;
};

export default AddTaskFormContainer;
