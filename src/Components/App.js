import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Treatment from './Steps/Treatment';
import TimeTable from './Steps/TimeTable';
import UserInfo from './Steps/UserInfo';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Treatment} />
				<Route path="/time" component={TimeTable} />
				<Route path="/userInfo" component={UserInfo} />
			</Switch>
		</div>
	);
}

export default App;
