import { Creators as ProductsCreator } from '../ducks/products';

import api from '../../services/api/products';

const {
	fetchAllProducts,
	fetchByCategory,
} = ProductsCreator;

export const loadProducts = () => (dispatch) => {
	api.getAll()
		.then(
			(response) => {
				dispatch(fetchAllProducts(response));
			},
		);
};
export const loadByCategory = (category) => (dispatch) => {
	api.getByCategory(category)
		.then(
			(response) => {
				dispatch(fetchByCategory(response));
			},
		);
};

