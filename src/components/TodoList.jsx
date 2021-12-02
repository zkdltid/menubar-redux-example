import React from 'react'
import PropTypes from 'prop-types';
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo, index) =>
            <Todo
                key={index}
                text={todo}
                onClick={() => onTodoClick()}
            />
        )}
    </ul>
)

TodoList.defaultProps = {
    todos: [],
    onTodoClick: () => { },
};


TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
    onTodoClick: PropTypes.func
}

export default TodoList
