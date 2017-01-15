import React, { Component, PropTypes } from 'react';
import ParentChild from './ParentChild';
import ChildParent from './ChildParent';
import CrossLevel from './CrossLevel';
import NoRelation from './NoRelation';
import styles from './ComponentCommunication.scss';

class ComponentCommunication extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ParentChild />
                <ChildParent />
                <CrossLevel />
                <NoRelation />
            </div>
        );
    }
}

export default ComponentCommunication;