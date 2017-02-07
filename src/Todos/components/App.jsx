import React from 'react';
import TodosList from '../containers/VisibleTodosList';
import AddToDo from '../containers/AddToDo';
import Footer from '../containers/Footer';

const App = () => (
    <div>
        <AddToDo />
        <TodosList />
        <Footer />
    </div>
);

export default App;