import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import styles from './Counter.scss';

const initState = {
    value: 1
};

function counter(state=initState, action) {
    switch (action.type) {
        case 'INCREMENT':
            state.value++;
            return state;
        case 'DECREMENT':
            state.value--;
            return state;
        default:
            return state;
    }
}

const store = createStore(counter);

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    static changeValue(type) {
        store.dispatch({ type: type })
        return store.getState();
    }
    add() {
        this.setState({ 
            ...Counter.changeValue('INCREMENT')
        });
    }
    sub() {
        this.setState({ 
            ...Counter.changeValue('DECREMENT')
        });
    }
    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <button onClick={::this.add}>Add</button>
                <button onClick={::this.sub}>Sub</button>
            </div>
        );
    }
}

export default Counter;