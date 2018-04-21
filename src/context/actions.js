import { getBusinesses, getBusinessDetail } from 'api';

export const incrementPage = (page) => async ({ businesses, ...restOfState }) => {
	const { pages, ...response } = await getBusinesses(page);
	return {
		...restOfState,
		businesses: [...businesses, ...response.businesses],
		page: page + 1,
		pages,
	};
};

export const getFirstPage = () => async () => getBusinesses();

export const openDetailsModal = (businessId) => async (state) => {
	return {
		...state,
		detailsModal: await getBusinessDetail(businessId),
	};
};

export const closeModal = () => ({ modal, ...restOfState }) =>
	Promise.resolve({ ...restOfState, detailsModal: null, error: null });
