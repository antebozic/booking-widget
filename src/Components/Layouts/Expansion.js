import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default ({ treatement, duration }) => (
	<ExpansionPanel>
		<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
			<Typography variant="overline">Duration</Typography>
		</ExpansionPanelSummary>
		<ExpansionPanelDetails>
			<Typography>
				Estimated time for {treatement} is {duration} minutes.
			</Typography>
		</ExpansionPanelDetails>
	</ExpansionPanel>
);
