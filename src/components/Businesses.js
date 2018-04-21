import React, { PureComponent } from 'react';
import { consume } from 'context';
import InfiniteScroller from 'components/InfiniteScroller';
import Business from 'components/Business';

import styles from 'styles/Businesses.scss';

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
		return (
			<div className={styles.businesses}>
				<InfiniteScroller onScroll={this.onScroll}>{this.renderBusinesses()}</InfiniteScroller>
			</div>
		);
	}
}

export default consume(Businesses);
