const SET_MODAL = "SET_MODAL";

export const setModal = (isOpen) => {
    return { type: SET_MODAL, payload: isOpen };
};

const initialState = {
    isOpen: false,
};

const todoModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL:
            return { ...state, isOpen: action.payload };
        default:
            return state;
    }
};

export default todoModalReducer;
