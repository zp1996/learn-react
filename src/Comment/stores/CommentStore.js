import EventEmitter from '../EventEmitter';
import AppDispatcher from '../dispatcher/AppDispatcher';
import CommentConstants from '../constants/CommentConstants';

let comment = [];

const CommentStore = Object.assign({}, EventEmitter.prototype, {
	getComment() {
		return comment;
	},
	emitChange() {
		this.emit('change');
	},
	addChangeListener(callback) {
		this.on('change', callback);
	},
	removeChangeListener(callback) {
		this.remove('change', callback);
	}
});

AppDispatcher.register(action => {
	switch(action.type) {
		case CommentConstants.LOAD_COMMENT_SUCCESS:
			comment = action.payload.comment;
			CommentStore.emitChange();
	}
});

export default CommentStore;
