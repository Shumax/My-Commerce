import { combineReducers } from 'redux';

import products from './products';
import handle from './handle';

export default combineReducers({
	products,
	handle,
});