/* eslint-disable no-unused-vars */
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	fetchAllProducts: ['products'],
});

const initialState = {
	products: [],
};

const load = (state = initialState, action) => ({
	...state,
	products: action.products,
});

export const handlers = {
	[Types.FETCH_ALL_PRODUCTS]: load,
}

export default createReducer(initialState, handlers);