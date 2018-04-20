import React, { PureComponent } from 'react';
import * as actions from 'context/actions';
import { Provider, Consumer, defaultValue } from 'context';
import Businesses from 'components/Businesses';

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

	render() {
		return (
			<Provider
				value={{
					state: { ...this.state },
					actions: { ...this.getBoundActions() },
				}}
			>
				<Businesses />
			</Provider>
		);
	}
}
