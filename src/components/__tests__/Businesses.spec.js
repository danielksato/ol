import React from 'react';
import { Businesses } from 'components/Businesses';
import InfiniteScroller from 'components/InfiniteScroller';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('businesses', () => {
	let props;
	let businesses;

	beforeEach(() => {
		props = {
			businesses: [{ name: 'Tumble 22', id: 999 }, { name: 'Tacodeli', id: 111 }],
			pages: { next: 'http://www.example.com/businesses/2' },
			getFirstPage: jest.fn(),
			incrementPage: jest.fn(),
		};
		businesses = shallow(<Businesses {...props} />);
	});

	it('should render an infinite scroller', () => {
		expect(businesses.find(InfiniteScroller).length).toBe(1);
	});

	it('should fire getFirstPage on mount', () => {
		expect(props.getFirstPage).toHaveBeenCalled();
	});

	it('should fire increment page when onScroll is called', () => {
		businesses.getElement().props.onScroll();
		expect(props.incrementPage).toHaveBeenCalledWith(props.pages.next);
	});

	it('should render businesses that are passed as props', () => {
		const businessList = businesses.find(InfiniteScroller).children();
		expect(businessList.length).toBe(props.businesses.length);
	});
});
