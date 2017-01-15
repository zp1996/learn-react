import React, { Component, PropTypes } from 'react';

const all_persons = ['Perter', 'John', 'Rube', 'Mike', 'Hax', 'Frank'];
class ChildParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {
                'Perter': true, 
                'John': true, 
                'Rube': true
            }
        };
    }
    onItemChange(name) {
        const { list } = this.state;
        list[name] ? (delete list[name]) : (list[name] = true);
        this.setState({ list });
    }
    render() {
        const { list } = this.state;
        return (
            <div className="child-parent">
                <h1>子组件向父组件的传递:利用回调</h1>
                <h2>已经含有了{Object.keys(list).length}项</h2>
                <ul>
                    {
                        all_persons.map((val, i) => {
                            return (
                                <ListItem value={val} key={i}
                                    onItemChange={this.onItemChange.bind(this, val)}
                                    checked={list[val]}
                                />
                            );
                        })
                    }
                </ul>
                <div>
                    <h1>兄弟组件之间一样用这种方式</h1>
                    <h2>已经选中了：</h2>
                    <ul>
                        {
                            Object.keys(list).map((val,i) => {
                                return (
                                    <li key={i}>{val}</li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

class ListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { checked, onItemChange, value } = this.props;
        return (
            <li>
                <input type="checkbox"
                    onChange={onItemChange}
                    defaultChecked={checked} />
                <span>{value}</span> 
            </li>
        );
    }
}
 
export default ChildParent;