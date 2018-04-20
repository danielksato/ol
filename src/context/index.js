import React from 'react';

export const defaultValue = {
	businesses: [],
	pages: {},
	modal: null,
};

export const { Provider, Consumer } = React.createContext(defaultValue);

export function consume(Component) {
	return (props) => <Consumer>{(value) => <Component {...value} {...props} />}</Consumer>;
}
