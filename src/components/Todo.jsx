import React from 'react'
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

Todo.defaultProps = {
    onClick: () => { },
    completed: false,
};


Todo.propTypes = {
    onClick: PropTypes.func,
    completed: PropTypes.bool,
    text: PropTypes.string
}

export default Todo
