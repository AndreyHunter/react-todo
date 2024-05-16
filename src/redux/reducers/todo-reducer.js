const ADD_TODO = "ADD_TODO";

export const addTodoAc = (text) => {
    return { type: ADD_TODO, payload: text };
};

const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const todo = {
                id: performance.now(),
                text: action.payload,
                done: false,
            };
            return { ...state, todos: [...state.todos, todo] };
        }
        default:
            return state;
    }
};

export default todoReducer;
