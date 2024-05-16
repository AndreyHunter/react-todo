import {
    FETCH_TODOS_START,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_ERROR,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    TOGGLE_STATUS,
} from './todos-actins';

const initialState = {
    todos: [],
    loading: false,
    error: null,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] };
        case DELETE_TODO:
            return { ...state, todos: state.todos.filter((task) => task.id !== action.id) };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((task) => {
                    if (task.id === action.id) {
                        return { ...task, text: action.text };
                    }
                    return task;
                }),
            };
        case TOGGLE_STATUS:
            return {
                ...state,
                todos: state.todos.map((task) => {
                    if (task.id === action.id) {
                        return { ...task, done: !task.done };
                    }
                    return task;
                }),
            };
        case FETCH_TODOS_START:
            return { ...state, loading: true };
        case FETCH_TODOS_SUCCESS:
            return { ...state, loading: false, todos: action.payload };
        case FETCH_TODOS_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default todoReducer;
