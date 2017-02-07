import React from 'react';
import ReactDom from 'react-dom';
import Todos from '../../src/Todos/index';

ReactDom.render(
	<Todos />
    , document.getElementById('todos-demo-card')
);