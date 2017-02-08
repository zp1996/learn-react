function EventHandlers() {}
EventHandlers.prototype = Object.create(null);

function EventEmitter() {}

EventEmitter.prototype = {
	_events: new EventHandlers(),
	constructor: EventEmitter,
	on(type, handler) {
		Array.isArray(this._events[type]) ?
			this._events[type].push(handler) : 
			(this._events[type] = [handler]);
	},
	emit(type, args) {
		this._events[type].forEach(fn => fn(args));
	},
	remove(type, fn) {
		this._events[type] = this._events[tyep].filter(val => val !== fn);
	}
};

export default EventEmitter;