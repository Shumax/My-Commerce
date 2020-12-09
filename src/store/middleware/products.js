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
	console.log(products)
	dispatch(filterByCategory(products, category));
};