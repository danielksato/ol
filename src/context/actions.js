import { getBusinesses } from 'api';

export const incrementPage = (page) => async ({ businesses, ...rest }) => {
	const { pages, res } = await getBusinesses(page);
	return {
		businesses: [...businesses, ...res.businesses],
		page: page + 1,
		pages,
	};
};

export const getFirstPage = () => async () => getBusinesses();
