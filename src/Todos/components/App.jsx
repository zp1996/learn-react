import React from 'react';
import TodosList from '../containers/VisibleTodosList';
import AddToDo from '../containers/AddToDo';

const App = () => (
    <div>
        <AddToDo />
        <TodosList />
    </div>
);

export default App;