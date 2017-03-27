import React, { Component, PropTypes } from 'react';
import styles from './state.scss';

class state extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        const { val } = this.state;
        this.setState({
            val: val + 1
        }, () => {
            console.log(this.state.val, 'x');
        });
        console.log(this.state.val);

        this.setState({
            val: val + 1
        }, () => {
            console.log(this.state.val, 'y');
        });
        console.log(this.state.val);

        setTimeout(() => {
            this.setState({
                val: this.state.val + 1
            });
            console.log(this.state.val);

            this.setState({
                val: this.state.val + 1
            });
            console.log(this.state.val);
        });
    }
    handleClick() {
        this.setState({ val: this.state.val + 1 });
        this.setState({ val: this.state.val + 1 });
    }
    render() {
        console.log(this.state.val);
        return (
            <button onClick={this.handleClick}>click</button>
        );
    }
}

export default state;
