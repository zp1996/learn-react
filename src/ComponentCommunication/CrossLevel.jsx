import React, { Component, PropTypes } from 'react';

class CrossLevel extends Component {
    static childContextTypes = {
        value: PropTypes.string,
        onNodeChange: PropTypes.func
    };
    constructor(props) {
        super(props);
        this.state = {
            value: 'root value',
            value1: 'root value1'
        };
    }
    onNodeChange(e) {
        const { value } = e.target;
        this.setState({ value });
    }
    getChildContext() {
        return {
            value: this.state.value1,
            onNodeChange: this.onNodeChange1.bind(this)
        };
    }
    onNodeChange1(e) {
        const { value } = e.target;
        this.setState({
            value1: value
        });
    }
    render() {
        const { value, value1 } = this.state;
        return (
            <div className="cross-level">
                <h1>跨级组件之间的访问</h1>
                <h2>仍然利回调函数,一层一层的向上</h2>
                <h3>root的值为：{value}</h3>
                <Parent value={value} onNodeChange={::this.onNodeChange} />
                <h2>利用Context实现,Context可以视为全局变量,可以减少一些代码的冗余,但是有可能存在新的问题,就像全局变量一样</h2>
                <h3>root的值为：{value1}</h3>
                <Parent1 />
            </div>
        );
    }
}

class Parent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { value, onNodeChange } = this.props;
        return (
            <div>
                <Child value={value} onNodeChange={onNodeChange} />
            </div>
        );
    }
}

class Parent1 extends Component {
    render() {
        return (
            <div>
                <Child1 />
            </div>
        );
    }
}

class Child extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { value, onNodeChange } = this.props;
        return (
            <div>
                <input type='text'
                    value={value}
                    onChange={onNodeChange} 
                />
            </div>
        );
    }
}

class Child1 extends Component {
    static contextTypes = {
        value: PropTypes.string,
        onNodeChange: PropTypes.func
    };
    render() {
        return (
            <div>
                <input type='text'
                    value={this.context.value}
                    onChange={this.context.onNodeChange} 
                />
            </div>
        );
    }
}

export default CrossLevel;