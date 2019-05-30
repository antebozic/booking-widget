import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Treatment from './Steps/Treatment';
import TimeTable from './Steps/TimeTable';
import UserInfo from './Steps/UserInfo';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" render={(props) => <Treatment {...props} />} />
				<Route path="/time" render={(props) => <TimeTable {...props} />} />
				<Route path="/userInfo" render={(props) => <UserInfo {...props} />} />
			</Switch>
		</div>
	);
}

export default App;
