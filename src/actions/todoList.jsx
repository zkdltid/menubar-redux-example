import {
    ADD_TO_TODO_LIST,
    REMOVE_FROM_TODO_LIST
} from "../constants/action-types";

export const addToToDoList = (text) => (dispatch) => {
    return dispatch({
        type: ADD_TO_TODO_LIST,
        data: text,
    });
};

export const removeFromToDoList = () => (dispatch) => {
    return dispatch({
        type: REMOVE_FROM_TODO_LIST,
    });
};