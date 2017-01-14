import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import TabContent from './TabContent';
import TabNav from './TabNav';
import style from './Tabs.scss';

class Tabs extends Component {
    static propTypes = {
        classPrefix: PropTypes.string,
        defaultActiveIndex: PropTypes.string,
        activeIndex: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };
    static defaultProps = {
        classPrefix: 'kz-tabs',
        onChange: () => {}
    };
    constructor(props) {
        super(props);
        var activeIndex;
        if ('activeIndex' in this.props) {
            activeIndex = this.props.activeIndex;
        } else if ('defaultActiveIndex' in this.props) {
            activeIndex = this.props.defaultActiveIndex;
        }
        this.state = {
            activeIndex,
            prevIndex: activeIndex
        };
        this.dom = null;
    }
    handleTabClick(activeIndex) {
        const prevIndex = this.state.activeIndex;
        if (this.state.activeIndex !== activeIndex &&
            'defaultActiveIndex' in this.props) {
            this.setState({
                activeIndex,
                prevIndex
            });
            this.changeDomPos(activeIndex);
        }
        this.props.onChange({ activeIndex, prevIndex });
    }
    // 组件挂载完之后,获取dom节点
    componentDidMount() {
        this.dom = findDOMNode(this.refs.tabcontent);   
        this.changeDomPos();
    }
    changeDomPos(index) {
        index = index || this.state.activeIndex;
        this.dom.style.marginLeft = `${-(index - 1) * 100}%`;       
    }
    renderTabNav() {
        const { classPrefix, children } = this.props;
        return (
            <TabNav
                classPrefix={classPrefix}
                panels={children}
                onTabClick={::this.handleTabClick}
                activeIndex={this.state.activeIndex}
            />
        );      
    }
    renderContent() {
        const { classPrefix, children } = this.props;
        return (
            <TabContent
                classPrefix={classPrefix}
                panels={children}
                ref="tabcontent"
                activeIndex={this.state.activeIndex}
            />
        );
    }
    render() {
        const { classPrefix } = this.props;
        return (
            <div className={this.props.className}>
                {this.renderTabNav()}
                {this.renderContent()}
            </div>
        );
    }
};

export default Tabs;