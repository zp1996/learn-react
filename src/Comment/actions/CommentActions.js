import AppDispatcher from '../dispatcher/AppDispatcher';
import CommentConstants from '../constants/CommentConstants';

const api = 'http://localhost:2016'

export const loadComment = () => {
	AppDispatcher.dispatch({
		type: CommentConstants.LOAD_COMMENT
	});

	fetch(api).then(res => {
		return res.json();
	}).then(({ comment }) => {
		AppDispatcher.dispatch({
			type: CommentConstants.LOAD_COMMENT_SUCCESS,
			payload: {
				comment
			}
		});
	}).catch((error) => {
		AppDispatcher.dispatch({
			type: CommentConstants.LOAD_COMMENT_ERROR,
			error
		});
	});

};

export const addComment = (value) => {
	AppDispatcher.dispatch({
		type: CommentConstants.ADD_COMMENT
	});

	fetch(api, {
		method: 'post',
		mode: 'cors',
		headers: {
    		"Content-Type": "application/json"
  		},
		body: JSON.stringify({ value })
	}).then((res) => {
		return res.json();
	}).then(({ comment }) => {
		AppDispatcher.dispatch({
			type: CommentConstants.LOAD_COMMENT_SUCCESS,
			payload: {
				comment
			}
		});
	}).catch((error) => {
		AppDispatcher.dispatch({
			type: CommentConstants.LOAD_COMMENT_ERROR,
			error
		});
	});
};
