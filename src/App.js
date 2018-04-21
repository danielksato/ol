import React, { PureComponent } from 'react';
import * as actions from 'context/actions';
import { Provider, defaultValue } from 'context';
import Businesses from 'components/Businesses';
import BusinessDetail from 'components/BusinessDetail';
import ErrorModal from 'components/ErrorModal';
import Modal from 'react-modal';

import styles from 'styles/App.scss';

Modal.setAppElement(document.getElementById('root'));

export default class App extends PureComponent {
	state = defaultValue;

	boundActions = Object.entries(actions).reduce((acc, [actionName, action]) => {
		acc[actionName] = (...args) => {
			action(...args)(this.state).then(
				(newState) => {
					this.setState(newState);
				},
				() => this.setState({ error: true })
			);
		};
		return acc;
	}, {});

	renderModal() {
		const { detailsModal, error } = this.state;
		return (
			<Modal
				className={styles.modal}
				isOpen={!!(detailsModal || error)}
				onRequestClose={this.boundActions.closeModal}
			>
				{detailsModal && <BusinessDetail {...detailsModal} />}
				{error && <ErrorModal />}
			</Modal>
		);
	}

	render() {
		return (
			<Provider value={{ ...this.state, ...this.boundActions }}>
				{this.renderModal()}
				<h2 className={styles.header}>Businesses</h2>
				<Businesses />
			</Provider>
		);
	}
}
