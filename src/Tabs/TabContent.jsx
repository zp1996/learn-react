import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class TabContent extends Component {
	static propTypes = {
		classPrefix: PropTypes.string,
		panels: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		]),
		activeIndex: PropTypes.string,
		isActive: PropTypes.bool
	};
	getTabPanes() {
		const { classPrefix, activeIndex, panels } = this.props;
		
		return React.Children.map(panels, (child) => {
			if (!child) return void 0;
			
			const isActive = child.props.order === activeIndex;
			
			return React.cloneElement(child, {
				isActive,
				classPrefix
			});
		});
	}
	render() {
		const { classPrefix } = this.props;
		
		const classes = classnames({
			[`${classPrefix}-content`]: true
		});
		
		return (
			<div className={classes}>
				{this.getTabPanes()}
			</div>
		);
	}
}

export default TabContent;