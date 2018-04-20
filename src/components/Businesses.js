import React, { PureComponent } from 'react';
import { consume } from 'context';
import InfiniteScroller from 'components/InfiniteScroller';
import Business from 'components/Business';

export class Businesses extends PureComponent {
	businessesRef = (el) => {
		this.businesses = el;
		this.listener = this.businesses.addEventListener('scroll', this.scrollListener);
	};

	componentDidMount() {
		this.props.getFirstPage();
	}

	componentWillUnmount() {
		this.business.removeEventListener(this.listener);
	}

	onScroll = () => {
		const {
			pages: { next, last },
			incrementPage,
		} = this.props;
		if (next && next !== last) {
			incrementPage(next);
		}
	};

	renderBusinesses() {
		return this.props.businesses.map((business) => {
			return <Business key={`business-${business.uuid}`} {...business} />;
		});
	}

	render() {
		return <InfiniteScroller onScroll={this.onScroll}>{this.renderBusinesses()}</InfiniteScroller>;
	}
}

export default consume(Businesses);
