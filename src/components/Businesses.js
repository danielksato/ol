import React, { PureComponent } from 'react';
import { consume } from 'context';
import InfiniteScroller from 'components/InfiniteScroller';
import Business from 'components/Business';

export class Businesses extends PureComponent {
	componentDidMount() {
		this.props.getFirstPage();
	}

	onScroll = () => {
		const {
			pages: { next },
			incrementPage,
		} = this.props;
		if (next) {
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
