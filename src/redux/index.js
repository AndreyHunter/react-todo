import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import todoReducer from './todos/todo-reducer';
import todoModalReducer from './todos/todo-modal-reducer';

const reducers = combineReducers({
    todos: todoReducer,
    todoModal: todoModalReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
