import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodosList = ({ todos, onTodoClick }) => {
	return (
		<ul>
			{
				todos.map(todo => (
					<Todo key={todo.id}
						{...todo}
						onClick={() => onTodoClick(todo.id)}
					/>
				))
			}
		</ul>
	);
};

TodosList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
};

export default TodosList;