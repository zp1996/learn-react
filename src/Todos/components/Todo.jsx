import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => {
	return (
		<li onClick={onClick}>
			{
				completed ? <del>{text}</del> : text
 			}
		</li>
	);
};

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default Todo;