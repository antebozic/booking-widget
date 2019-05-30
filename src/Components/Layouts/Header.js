import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

export default ({ titleText }) => (
	<AppBar position="static" color="primary" style={{ padding: 15 }}>
		<Typography variant="h3" align="center" color="inherit">
			{titleText}
		</Typography>
	</AppBar>
);
