import React from 'react';
import { Business } from 'components/Business';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('business', () => {
	let props;

	beforeEach(() => {
		props = {
			id: 999,
			name: 'Tumble 22',
			openDetailsModal: jest.fn(),
		};
	});

	it('should render a business', () => {
		const business = shallow(<Business {...props} />);
		expect(business.find('h3').text()).toBe(props.name);
	});

	it('should open the details modal when clicked', () => {
		const business = shallow(<Business {...props} />);
		const name = business.find('h3');
		name.simulate('click');
		expect(props.openDetailsModal).toBeCalledWith(props.id);
	});
});
