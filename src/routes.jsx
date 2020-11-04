import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';

export default function Routes() {
	return(
		<BrowserRouter>
			<Switch>
				<Route path='/' component={Home} exact/>
			</Switch>
		</BrowserRouter>
	);
};
