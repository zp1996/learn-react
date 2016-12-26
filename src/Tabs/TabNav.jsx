import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class TabNav extends Component {
	static propTypes = {
		classPrefix: PropTypes.string,
		panels: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		]),
		activeIndex: PropTypes.string
	};
	constructor(props) {
		super(props);
		this.lis = [];
		this.ink = null;
	}
	getTabs() {
		const { classPrefix, panels, activeIndex} = this.props;
		return React.Children.map(panels, child => {
			if (!child) return void 0;
			
			const order = child.props.order,
				ref = `tabnav-${order}`,
				isActive = activeIndex === order,
				classes = classnames({
					[`${classPrefix}-tabnav`]: true,
					[`${classPrefix}-tabnav-active`]: isActive,
					[`${classPrefix}-tabnav-disabled`]: child.props.disabled
				}), 
				events = {};
			
			if (!child.props.disabled) {
				events.onClick = this.props.onTabClick.bind(this, order);
			}
			
			this.ink || this.lis.push(ref);

			if (isActive && this.ink) {
				this.changeInkPos(activeIndex - 1);
			}

			return (
				<li 
					role='tabnav'
					className={classes}
					{...events}
					aria-disabled={Boolean(child.props.disabled)} 
					aria-selected={activeIndex === order}
					ref={ref}
				>
					{child.props.tab}
				</li>
			);
		});
	}
	changeInkPos(pos) {
		const { w, dis } = this.lis[pos];
		this.ink.style.width = `${w}px`;
		this.ink.style.transform = `translateX(${dis}px)`;
	}
	componentDidMount() {
		const { activeIndex, classPrefix } = this.props;
		var dis = 0;
		this.ink = document.querySelector(`.${classPrefix}-ink-bar`);
		this.lis = this.lis.map(li => {
			const w = this.refs[li].offsetWidth,
				res = { w, dis };
			dis += w;
			return res;
		});
		this.changeInkPos(activeIndex - 1);
	}
	render() {
		const { classPrefix } = this.props;
		
		const rootClasses = classnames({
			[`${classPrefix}-bar`]: true
		});
		
		const classes = classnames({
			[`${classPrefix}-nav`]: true
		});
		
		return (
			<div className={rootClasses} role="tablist">
				<ul className={classes}>
					{this.getTabs()}
				</ul>
				<div className={`${classPrefix}-ink-bar`}></div>
			</div>
		);
	}
}

export default TabNav;