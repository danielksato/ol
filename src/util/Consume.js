import React from 'react';
import { Consumer } from 'context';

export default function Consume(Component) {
	return () => <Consumer>{(value) => <Component {...value} />}</Consumer>;
}
