/* eslint-disable no-unused-vars */
import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
	loadProducts: ['loadProducts'],
});

const initialState = {
	products: [],
};

const load = (state = initialState, action) => ({
	...state,
	products: action.loadProducts,
});

const handlers = {
	[Types.fetchAll]: load,
}

export default createReducer(initialState, handlers);