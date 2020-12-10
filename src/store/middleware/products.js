import { Creators as ProductsCreator } from '../ducks/products';

import api from '../../services/api/products';

const {
	fetchAllProducts,
	filterByCategory,
} = ProductsCreator;

export const loadProducts = () => (dispatch) => {
	api.getAll()
		.then(
			(response) => {
				dispatch(fetchAllProducts(response));
			},
		);
};
export const filterProducts = (products, category) => (dispatch) => {
	const filter = products.filter(cat => cat.category.includes(category));
	console.log(filter)
	dispatch(filterByCategory(filter));
};