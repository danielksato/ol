import React, { PureComponent } from 'react';
import styles from 'styles/InfiniteScroller.scss';

export default class InfiniteScroller extends PureComponent {
	canScroll = true;

	scrollerRef = (el) => {
		this.scroller = el;
		this.scroller && this.scroller.addEventListener('scroll', this.scrollListener);
	};

	componentWillUnmount() {
		this.scoller && this.scroller.removeEventListener(this.scrollListener);
	}

	componentDidUpdate() {
		this.canScroll = true;
	}

	scrollListener = ({ currentTarget: { scrollHeight, scrollTop, clientHeight } }) => {
		const { onScroll } = this.props;
		const threshold = scrollHeight - clientHeight * 2 - scrollTop;
		if (threshold <= 0 && this.canScroll) {
			this.canScroll = false;
			onScroll();
		}
	};

	render() {
		return (
			<div className={styles.scroller} ref={this.scrollerRef}>
				{this.props.children}
			</div>
		);
	}
}
