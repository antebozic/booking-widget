import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Footer.css';

export default ({ urlNext, btnText }) => (
	<div className="footer">
		<Button component={RouterLink} to={urlNext} variant="contained" align="center" color="secondary">
			{btnText}
		</Button>
	</div>
);
