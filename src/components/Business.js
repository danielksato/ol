import React, { PureComponent } from 'react';
import { consume } from 'context';

export class Business extends PureComponent {
	onClick = (e) => {
		this.props.openModal(this.props.id);
	};

	render() {
		const { name } = this.props;
		return (
			<div style={{ display: 'inline-block' }}>
				<h3 onClick={this.onClick}>{name}</h3>
			</div>
		);
	}
}

export default consume(Business);
