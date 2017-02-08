import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import CommentStore from '../stores/CommentStore';

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: CommentStore.getComment()
		};	
		this._onChange = this._onChange.bind(this);
	}
	_onChange() {
		this.setState({
			comment: CommentStore.getComment()
		});
	}
	componentDidMount() {
		CommentStore.addChangeListener(this._onChange);
	}
	componentWillUnMount() {
		CommentStore.removeChangeListener(this._onChange);
	}
	render() {
		const { comment } = this.state;
		return (
			<div>
				<CommentList list={comment} />
				<CommentForm />
			</div>
		);
	}
}

export default CommentBox;