import React, { Component } from 'react';
import { Footer, Header } from '../Layouts';
import {
	Grid,
	Paper,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
	Typography
} from '@material-ui/core';
import ls from 'local-storage';

class TimeTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ls.get('time') || ''
		};
	}

	render() {
		const styles = {
			Paper: { height: 550, boxShadow: 'none' },
			Grid: {
				textAlign: 'center',
				paddingTop: 0
			},
			Typography: {
				paddingBottom: 20,
				paddingTop: 20
			}
		};
		return (
			<Grid container>
				<Header titleText={'Time'} />
				<Grid item sm style={styles.Grid}>
					<Paper style={styles.Paper}>
						<FormControl component="fieldset">
							<FormLabel component="legend">
								<Typography variant="h4" color="primary" style={styles.Typography}>
									Select
								</Typography>
							</FormLabel>
							<RadioGroup
								aria-label="Treatement"
								name="treatements1"
								value={this.state.value}
								onChange={(e) => {
									this.setState({
										value: e.target.value
									});
									ls.set('time', e.target.value);
								}}
							>
								<FormControlLabel
									value="Monday at 11.30h"
									control={<Radio />}
									label={
										<Typography variant="h5" style={styles.Typography}>
											Monday 11.30
										</Typography>
									}
								/>
								<FormControlLabel
									value="Monday at 13.00h"
									control={<Radio />}
									label={
										<Typography variant="h5" style={styles.Typography}>
											Monday 13.00
										</Typography>
									}
								/>
								<FormControlLabel
									value="Wednesday at 09.00h"
									control={<Radio />}
									label={
										<Typography variant="h5" style={styles.Typography}>
											Wednesday 09.00
										</Typography>
									}
								/>
								<FormControlLabel
									value="Thuersday at 16.00h"
									control={<Radio />}
									label={
										<Typography variant="h5" style={styles.Typography}>
											Thuersday 16.00
										</Typography>
									}
								/>
								<FormLabel component="legend" />
								<FormControlLabel
									value="Friday at 10.30h"
									control={<Radio />}
									label={
										<Typography variant="h5" style={styles.Typography}>
											Friday 10.30
										</Typography>
									}
								/>
								<FormLabel component="legend" />
								<FormControlLabel
									value="Friday at 14.00h"
									control={<Radio />}
									label={
										<Typography variant="h5" style={styles.Typography}>
											Friday 14.00
										</Typography>
									}
								/>
								<FormLabel component="legend" />
								<FormControlLabel
									value="Friday at 15.00h"
									control={<Radio />}
									label={
										<Typography variant="h5" style={styles.Typography}>
											Friday 15.00
										</Typography>
									}
								/>
								<FormLabel component="legend" />
							</RadioGroup>
						</FormControl>
					</Paper>
				</Grid>
				<Footer urlNext={'/userInfo'} btnText={'Next'} />
			</Grid>
		);
	}
}

export default TimeTable;
