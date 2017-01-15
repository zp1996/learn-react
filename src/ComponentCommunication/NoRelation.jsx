import React, { Component, PropTypes } from 'react';
import EventEmitter from './EventEmitter';

const event = new EventEmitter();

const data = {
    color: 'red'
}

const util = {
    componentDidMount: function() {
        event.on('change', this.changeColor.bind(this));
    },
    changeColor: function(color) {
        this.setState({ 
            color: color 
        });
    },
};

class NoRelation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="no-relation">
                <h1>无关组件的通信,利用观察者模式</h1>
                <Button1 />
                <Button2 />
            </div>
        );
    }
}
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: data.color
        };
        this.changeColor = this.changeColor.bind(this);
    }
    componentDidMount() {
        event.on('change', this.changeColor);
    }
    componentWillUnmount() {
        event.remove('change', this.changeColor);
    }
    changeColor(color) {
        this.setState({ 
            color: color 
        });
    }
    baseRender(color) {
        return (
            <button style={{color: this.state.color}}
                onClick={() => event.emit('change', color)}
            >click</button>
        );
    }
}

class Button1 extends Button {
    constructor(props) {
        super(props);
    }
    render() {
        return this.baseRender('blue');
    }
}

class Button2 extends Button {
    constructor(props) {
        super(props);
    }
    render() {
        return this.baseRender('green');
    }
}

export default NoRelation;