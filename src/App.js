import React, { PureComponent } from 'react';
import * as actions from 'context/actions';
import { Provider, Consumer, defaultValue } from 'context';
import Businesses from 'components/Businesses';
import BusinessDetail from 'components/BusinessDetail';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'));

export default class App extends PureComponent {
	state = defaultValue;

	getBoundActions = () => {
		return Object.entries(actions).reduce((acc, [actionName, action]) => {
			acc[actionName] = (...args) => {
				action(...args)(this.state).then((newState) => {
					this.setState(newState);
				});
			};
			return acc;
		}, {});
	};

	renderModal() {
		const { modal } = this.state;
		return (
			<Modal isOpen={!!modal} onRequestClose={this.getBoundActions().closeModal}>
				{modal && <BusinessDetail {...modal} />}
			</Modal>
		);
	}

	render() {
		return (
			<Provider value={{ ...this.state, ...this.getBoundActions() }}>
				{this.renderModal()}
				<h2>Businesses</h2>
				<Businesses />
			</Provider>
		);
	}
}
