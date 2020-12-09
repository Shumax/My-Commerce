/* eslint-disable no-unused-vars */
import { createActions, createReducer } from 'reduxsauce';
import products from '../../services/api/products';

export const { Types, Creators } = createActions({
	fetchAllProducts: ['products'],
	filterByCategory: ['category'],
});

const initialState = {
	products: [],
	productsFiltered: [],
};

const load = (state = initialState, action) => ({
	...state,
	products: action.products,
});

const filter = (state = initialState, action) => ({
	...state,
	productsFiltered: action.products.filter(category => category.category.includes(action.category)),
});

export const handlers = {
	[Types.FETCH_ALL_PRODUCTS]: load,
	[Types.FILTER_BY_CATEGORY]: filter,
}

export default createReducer(initialState, handlers);