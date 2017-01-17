import React, { Component, PropTypes } from 'react';
import styles from './Todos.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import App from './components/App';

const store = createStore(reducer);

class Todos extends Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}

export default Todos;