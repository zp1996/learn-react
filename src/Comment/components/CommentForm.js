import React, { Component } from 'react';
import { addComment } from '../actions/CommentActions';

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}
	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}
	addComment() {
		const { value } = this.state;
		if (value) {
			addComment(value);
		}
		this.setState({ value: '' });
 	}
 	render() {
 		const { value } = this.state;
 		return (
 			<div>
 				<textarea 
 					value={value}
 					onChange={::this.handleChange}
 				></textarea>
 				<button onClick={::this.addComment}>提交</button>
 			</div>
 		);
 	}
}

export default CommentForm;