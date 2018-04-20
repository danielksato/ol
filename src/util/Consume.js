import React from 'react';
import { Consumer } from 'context';

export default function Consume(Component) {
	return (props) => <Consumer>{(value) => <Component {...value} {...props} />}</Consumer>;
}
