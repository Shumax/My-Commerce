import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import reducers from './ducks';

const persistedReducer = persistReducer(reducers);

const store = createStore(
	persistedReducer,
	applyMiddleware(thunk),
);

const persistor = persistStore(store);

export { store, persistor };