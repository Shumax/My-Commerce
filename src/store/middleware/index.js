import { Creators as ProductsCreator } from '../ducks/products';

import api from '../../services/api/products';

const {
	loadProducts,
} = ProductsCreator;

export const fetchAllProducts = () => (dispatch) => {
	api.getAll()
		.then(
			(response) => {
				dispatch(loadProducts(response));
			},
		);
};

