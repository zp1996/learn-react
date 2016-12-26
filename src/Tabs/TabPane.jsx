import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class TabPane extends Component {
	static propTypes = {
		tab: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.node
		]).isRequired,
		order: PropTypes.string.isRequired,
		isActive: PropTypes.bool,
		disable: PropTypes.bool
	};
	render() {
		const { classPrefix, isActive, children, className } = this.props;
		const classes = classnames({
			[className]: className,
			[`${classPrefix}-tabpanel`]: true,
			[`${classPrefix}-tabpanel-inactive`]: !isActive
		});
		return (
			<div className={classes} role="tabpanel" aria-hidden={!isActive}>
				{children}
			</div>
		);
	}
};

export default TabPane;