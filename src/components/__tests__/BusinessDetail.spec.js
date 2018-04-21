import React from 'react';
import BusinessDetail from 'components/BusinessDetail';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('BusinessDetail', () => {
	let props;
	let detail;

	beforeEach(() => {
		props = {
			name: 'Flyrite',
			address: '6607 Burnet Rd',
			address2: '',
			city: 'Austin',
			state: 'TX',
			zip: '78757',
			phone: '512-555-5555',
			website: 'http://www.example.com',
		};
		detail = shallow(<BusinessDetail {...props} />);
	});

	it('should render the name', () => {
		expect(detail.find('h2').text()).toBe(props.name);
	});

	it('should render the address', () => {
		const [address, address2, city, state, zip] = detail
			.children()
			.slice(1)
			.map((child) => child.text());
		Object.entries({ address, address2, city, state, zip }).forEach(([key, value]) => {
			expect(value).toBe(props[key]);
		});
	});

	it('should render the phone number', () => {
		expect(detail.find('div > div > p').text()).toBe(props.phone);
	});

	it('should render the website link', () => {
		expect(detail.find('a').getElement().props.href).toBe(props.website);
	});
});
