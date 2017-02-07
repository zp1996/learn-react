import React, { Component } from 'react';
import style from './style.scss';

class EventTest extends Component {
    handleParentClick(e) {
        console.log('click parent div');
    }
    handleChildClick(e) {
        e.stopPropagation();
        console.log('click child div');
    }
    componentDidMount() {
        document.querySelector('.parent').addEventListener('click', this.handleParentClick);
    }
    render() {
        return (
            <div className="parent">
                <div className="child" onClick={this.handleChildClick}>
                </div>
            </div>
        );
    }
}

export default EventTest;