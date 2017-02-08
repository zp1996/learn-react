import React, { Component, PropTypes } from 'react';
import { loadComment } from '../actions/CommentActions';

class CommentList extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		loadComment();
	}
	render() {
		const { list } = this.props;
		return (
			<div>
				<ul>
					{
						list.map((val, i) => (
							<li key={i}>
								<p>{val.name ? val.name : '匿名用户'}</p>
								<p>{val.content}</p>
							</li>	
						))
					}
				</ul>
			</div>
		);
	}
}

export default CommentList;