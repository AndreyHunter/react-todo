import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const FETCH_TODOS_START = 'FETCH_TODOS_START';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_STATUS = 'TOGGLE_STATUS';

const addTodoAc = (text) => {
    return { type: ADD_TODO, payload: text };
};

const deleteTodoAc = (id) => {
    return { type: DELETE_TODO, id };
};

const editTodoAc = (id, text) => {
    return { type: EDIT_TODO, id, text };
};

const toggleStatusAc = (id) => {
    return { type: TOGGLE_STATUS, id };
};

// FETCH TODOS

const fetchTodosStartAc = () => {
    return { type: FETCH_TODOS_START };
};

const fetchTodosSuccessAc = (todos) => {
    return { type: FETCH_TODOS_SUCCESS, payload: todos };
};

const fetchTodosErrorAc = (error) => {
    return { type: FETCH_TODOS_ERROR, payload: error };
};

export const fetchTodos = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchTodosStartAc());
            const res = await axios.get('http://localhost:3000/todos');
            dispatch(fetchTodosSuccessAc(res.data));
        } catch (error) {
            dispatch(fetchTodosErrorAc(error));
        }
    };
};

export const postTodo = (text) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('http://localhost:3000/todos', {
                id: uuidv4(),
                text: text,
                done: false,
            });
            dispatch(addTodoAc(res.data));
        } catch (error) {
            console.error(error);
        }
    };
};

export const deleteTodo = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:3000/todos/${id}`);
            dispatch(deleteTodoAc(id));
        } catch (error) {
            console.error('Ошибка при удалении задачи:', error);
        }
    };
};

export const editTodo = (id, text) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`http://localhost:3000/todos/${id}`);
            const currentTodo = res.data;
            const updateTodo = { ...currentTodo, text };

            await axios.put(`http://localhost:3000/todos/${id}`, updateTodo);

            dispatch(editTodoAc(id, text));
        } catch (error) {
            console.error('Ошибка при редактировании задачи:', error);
        }
    };
};

export const toggleStatusTodo = (id, done) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`http://localhost:3000/todos/${id}`);
            const updateTodo = { ...res.data, done: !done };
            await axios.put(`http://localhost:3000/todos/${id}`, updateTodo);

            dispatch(toggleStatusAc(id));
        } catch (error) {
            console.error('Ошибка при редактировании задачи:', error);
        }
    };
};
