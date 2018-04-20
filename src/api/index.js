const BUSINESSES_ENDPOINT = 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses';

export const getBusinesses = async (page = 1) =>
	fetch(`${BUSINESSES_ENDPOINT}?page=${page}&perPage=20`).then(
		(res) => res.json(),
		(err) => console.error(err)
	);

export const getBusinessDetail = async (id) =>
	fetch(`${BUSINESSES_ENDPOINT}/${id}`).then((res) => res.json());
