/* eslint-disable no-unused-vars */
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	fetchAllProducts: ['products'],
	filterByCategory: ['productsByCategory'],
	singleProduct: ['product'],
});

const initialState = {
	products: [],
	productsFiltered: [],
	productSelected: {},
};

const load = (state = initialState, action) => ({
	...state,
	products: action.products,
});

const filter = (state = initialState, action) => ({
	...state,
	productsFiltered: action.productsByCategory,
});

const single = (state = initialState, action) => ({
	...state,
	productSelected: action.product,
});

export const handlers = {
	[Types.FETCH_ALL_PRODUCTS]: load,
	[Types.FILTER_BY_CATEGORY]: filter,
	[Types.SINGLE_PRODUCT]: single,
}

export default createReducer(initialState, handlers);