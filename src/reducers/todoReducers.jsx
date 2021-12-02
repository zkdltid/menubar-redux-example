import {
    ADD_TO_TODO_LIST,
    // UPDATE_TODO_LIST,
    REMOVE_FROM_TODO_LIST,
} from "../constants/action-types";

const TODO_LIST = "todoList";

const localStorageToDoList = JSON.parse(localStorage.getItem(TODO_LIST));

const initialState = localStorageToDoList
    ? { todoList: localStorageToDoList }
    : { todoList: ["default1", "default2"] };

export const todoReducers = (state = initialState, action) => {
    const { type, data } = action;

    switch (type) {
        case ADD_TO_TODO_LIST:
            state.todoList = [data, ...state.todoList];
            localStorage.setItem(TODO_LIST, JSON.stringify(state.todoList));
            return {
                ...state,
            };

        case REMOVE_FROM_TODO_LIST:
            state.todoList.splice(0, 1)
            localStorage.setItem(TODO_LIST, JSON.stringify(state.todoList));
            return {
                ...state,
                todoList: [...state.todoList],
            };
        default:
            return state;
    }
}


