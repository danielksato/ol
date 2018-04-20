import React, { PureComponent } from 'react';

export default class Business extends PureComponent {
	renderPrintAttributes(attributes, uuid) {
		return Object.entries(attributes).map(([key, value]) => {
			return (
				<p key={`${uuid}-${key}`}>
					<span>{key}</span>
					<span>{value}</span>
				</p>
			);
		});
	}

	renderWebsite(website) {
		return <a href={website}>{website}</a>;
	}

	render() {
		const { id, uuid, website, name, ...printAttributes } = this.props;
		return (
			<div>
				<h3>{name}</h3>
				{this.renderPrintAttributes(printAttributes, uuid)}
				{this.renderWebsite(website)}
			</div>
		);
	}
}
