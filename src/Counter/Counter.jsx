import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers } from 'redux';
import styles from './Counter.scss';

// 这些例子其实根本不用redux来做就可以

const initState = {
    value: 1,
    show: 1
};

function counterReducer(state=initState.value, action) {
    switch (action.type) {
        case 'INCREMENT':
            return ++state;
        case 'DECREMENT':
            return --state;
        default:
            return state;
    }
}

function displayReducer(state=initState.show, action) {
    switch(action.type) {
        case 'SHOW':
            return 1;
        case 'HIDE':
            return 0;
        default:
            return state;
    }
}

const reducer = combineReducers({
    value: counterReducer,
    show: displayReducer
});

const store = createStore(reducer);

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    changeValue(type) {
        store.dispatch({ type: type });
        this.setState({ 
            ...store.getState()
        });
    }
    add() {
        this.changeValue('INCREMENT');
    }
    sub() {
        this.changeValue('DECREMENT');
    }
    show() {
        this.changeValue('SHOW');
    }
    hide() {
        this.changeValue('HIDE');
    }
    render() {
        const { show, value } = this.state;
        return (
            <div>
                <p>{value}</p>
                <button onClick={::this.add}>Add</button>
                <button onClick={::this.sub}>Sub</button>
                <p>{show}</p>
                <button onClick={::this.show}>Show</button>
                <button onClick={::this.hide}>hide</button>
            </div>
        );
    }
}

export default Counter;