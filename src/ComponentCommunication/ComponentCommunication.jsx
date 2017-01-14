import React, { Component, PropTypes } from 'react';
import styles from './ComponentCommunication.scss';

class ComponentCommunication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: ['Peter', 'John']
        };
    }
    handleClick() {
        const { persons } = this.state;
        persons.push('zp1996');
        this.setState({ persons });
    }
    render() {
        return (
            <div onClick={::this.handleClick}>
                <h1>父组件向子组件传递</h1>
                <List list={this.state.persons} title="persons" />
            </div>
        );
    }
}

function ListItem({ value }) {
    return (
        <li>
            <span>{value}</span>
        </li>
    );
}

function List({ list, title }) {
    return (
        <div>
            <ul>
                {
                    list.map((val, i) => {
                        return (
                            <ListItem value={val} key={i} />
                        );
                    })
                }
            </ul>
        </div>
    );
}
export default ComponentCommunication;