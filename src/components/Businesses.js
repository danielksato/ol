import React, { PureComponent } from 'react';
import consume from 'util/Consume';
import Business from 'components/Business';

export class Businesses extends PureComponent {
	componentDidMount() {
		this.props.actions.getFirstPage();
	}

	renderBusinesses() {
		return this.props.state.businesses.map((business) => {
			return <Business key={`business-${business.uuid}`} {...business} />;
		});
	}

	render() {
		return <div>{this.renderBusinesses()}</div>;
	}
}

export default consume(Businesses);
