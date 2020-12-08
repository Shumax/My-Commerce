/* eslint-disable no-unused-vars */
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	fetchAllProducts: ['products'],
	fetchByCategory: ['productsByCategory'],
});

const initialState = {
	products: [],
	productsByCategory: [],
};

const load = (state = initialState, action) => ({
	...state,
	products: action.products,
});

const filter = (state = initialState, action) => ({
	...state,
	productsByCategory: action.productsByCategory,
});

export const handlers = {
	[Types.FETCH_ALL_PRODUCTS]: load,
	[Types.FETCH_BY_CATEGORY]: filter,
}

export default createReducer(initialState, handlers);