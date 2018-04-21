import React, { PureComponent } from 'react';
import { consume } from 'context';

import styles from 'styles/Business.scss';

export class Business extends PureComponent {
	onClick = (e) => {
		this.props.openDetailsModal(this.props.id);
	};

	render() {
		const { name } = this.props;
		return (
			<div>
				<h3 className={styles.business} onClick={this.onClick}>
					{name}
				</h3>
			</div>
		);
	}
}

export default consume(Business);
