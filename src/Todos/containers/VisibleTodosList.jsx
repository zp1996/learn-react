import { connect } from 'react-redux';
import { toggleTodo } from '../actions/index';
import TodoList from '../components/TodosList';

function getTodos(todos, filter) {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETE':
            return todos.filter(todo => todo.compelted);
        case 'SHOW_ACTIVE':
            return todo.filter(todo => !todo.compelted);
        default: 
            throw new Error('Unknow filter');
    }
}

const mapStateToProps = (state) => ({
    todos: getTodos(state.todos, state.visibilityFilter)   
});

const mapDispatchToProps = {
    onTodoClick: toggleTodo
};


// 将todos与onTodoClick注入
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;