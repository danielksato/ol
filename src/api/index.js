const BUSINESSES_ENDPOINT = 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses';

export const getBusinesses = async (page) => {
	const endpoint = page || `${BUSINESSES_ENDPOINT}?page=${page}&perPage=20`;
	return fetch(endpoint).then((res) => res.json());
};

export const getBusinessDetail = async (id) =>
	fetch(`${BUSINESSES_ENDPOINT}/${id}`).then((res) => res.json());
