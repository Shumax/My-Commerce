import { Creators as ProductsCreator } from '../ducks/products';
import { Creators as HandleCreator } from '../ducks/handle';

import api from '../../services/api/products';

const {
	fetchAllProducts,
	filterByCategory,
	singleProduct,
} = ProductsCreator;

const { toggleSingleCard } = HandleCreator;

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

	dispatch(filterByCategory(filter));
};
export const singleCard = (product) => (dispatch) => {
	dispatch(
		singleProduct(product),
		toggleSingleCard(),
	);
};