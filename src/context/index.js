import React from 'react';

export const defaultValue = {
	businesses: [],
	pages: {},
	detailsModal: null,
	error: null,
};

export const { Provider, Consumer } = React.createContext(defaultValue);

export function consume(Component) {
	return (props) => <Consumer>{(value) => <Component {...value} {...props} />}</Consumer>;
}
