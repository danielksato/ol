import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import InfiniteScroller from 'components/InfiniteScroller';

describe('Infinite Scroller', () => {
	const props = {
		onScroll: jest
			.fn()
			.mockImplementation(() => new Promise((res) => process.nextTick(() => res()))),
		children: <div />,
	};

	it('should fire onScroll when scrolled below the threshold and set canScroll to false until the component updates', () => {
		const scroller = renderIntoDocument(<InfiniteScroller {...props} />);
		scroller.scrollListener({
			currentTarget: {
				clientHeight: 0,
				scrollHeight: 0,
				scrollTop: 0,
			},
		});
		expect(props.onScroll).toBeCalled();
		expect(scroller.canScroll).toBe(false);
		scroller.componentDidUpdate();
		expect(scroller.canScroll).toBe(true);
	});
});
