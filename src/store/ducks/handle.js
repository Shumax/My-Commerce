import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	toggleSingleCard: [''], 
});

const initialState = {
	showSingleCard: false
};

const singleCard = (state = initialState) => ({
	...state, 
	showSingleCard: true,
});

export const handlers = {
	[Types.TOGGLE_SINGLE_CARD]: singleCard,
}

export default createReducer(initialState, handlers);