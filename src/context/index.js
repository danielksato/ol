import React from 'react';
import * as actions from 'context/actions';

export const defaultValue = {
	businesses: [],
	pages: {},
};

export const { Provider, Consumer } = React.createContext(defaultValue);

export const ActionConsumer = <Consumer>{(value) => ({ value, ...actions })}</Consumer>;
