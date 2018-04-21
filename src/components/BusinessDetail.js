import React, { PureComponent } from 'react';
import styles from '../styles/BusinessDetail.module.css';

export default class BusinessDetails extends PureComponent {
	renderAddress() {
		const { address, address2, city, state, zip } = this.props;
		return Object.entries({ address, address2, city, state, zip }).map(([key, val]) => (
			<p className={styles.address} key={`address-${key}`}>
				{val}
			</p>
		));
	}

	renderContact() {
		const { phone, website } = this.props;
		return (
			<div>
				<p>{phone}</p>
				<a href={website}>{website}</a>
			</div>
		);
	}
	render() {
		const { name } = this.props;
		return (
			<div>
				<h2>{name}</h2>
				{this.renderAddress()}
				{this.renderContact()}
			</div>
		);
	}
}
