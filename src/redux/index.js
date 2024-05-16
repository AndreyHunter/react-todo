import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import todoReducer from "./reducers/todo-reducer";
import todoModalReducer from "./reducers/todo-modal-reducer";

const reducers = combineReducers({
    todos: todoReducer,
    todoModal: todoModalReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;