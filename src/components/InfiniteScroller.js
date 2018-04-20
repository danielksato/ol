import React, { PureComponent } from 'react';

export default class InfiniteScroller extends PureComponent {
	scrollerRef = (el) => {
		this.scroller = el;
		this.listener = this.scroller.addEventListener('scroll', this.scrollListener);
	};

	componentWillUnmount() {
		this.scroller.removeEventListener(this.scrollListener);
	}

	scrollListener = ({ currentTarget: { scrollHeight, scrollTop, clientHeight } }) => {
		const { onScroll } = this.props;
		const threshold = scrollHeight - clientHeight * 2 - scrollTop;
		if (threshold <= 0) {
			onScroll();
		}
	};

	render() {
		return (
			<div
				style={{
					maxHeight: 800,
					display: 'inline-flex',
					flexDirection: 'column',
					overflowY: 'scroll',
				}}
				ref={this.scrollerRef}
			>
				{this.props.children}
			</div>
		);
	}
}
