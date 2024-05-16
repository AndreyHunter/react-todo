import { v4 as uuidv4 } from 'uuid';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const TOGGLE_STATUS = 'TOGGLE_STATUS';

export const addTodoAc = (text) => {
    return { type: ADD_TODO, payload: text };
};

export const deleteTodoAc = (id) => {
    return { type: DELETE_TODO, id };
};

export const editTodoAc = (id, text) => {
    return { type: EDIT_TODO, id, text };
};

export const toggleStatusAc = (id) => {
    return { type: TOGGLE_STATUS, id };
};

const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const todo = {
                id: uuidv4(),
                text: action.payload,
                done: false,
            };
            return { ...state, todos: [...state.todos, todo] };
        }
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
        default:
            return state;
    }
};

export default todoReducer;
