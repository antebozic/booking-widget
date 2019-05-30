import React, { Component } from 'react';
import { Footer, Header, Expansion } from '../Layouts';
import {
	Paper,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
	Typography,
	Grid
} from '@material-ui/core';
import ls from 'local-storage';

class Treatment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ls.get('treatment') || ''
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
			// <div className="treatement__wrap">

			<Grid container>
				<Header titleText={'Treatment'} />
				<Grid item sm style={styles.Grid}>
					<Paper style={styles.Paper}>
						<FormControl component="fieldset">
							<FormLabel component="legend">
								<Typography variant="h4" color="primary" style={styles.Typography}>
									Select
								</Typography>
							</FormLabel>
							<RadioGroup
								aria-label="Treatment"
								name="treatment"
								value={this.state.value}
								onChange={(e) => {
									this.setState({
										value: e.target.value
									});
									ls.set('treatment', e.target.value);
								}}
							>
								<FormControlLabel
									value="Vaccination"
									control={<Radio />}
									label={
										<Typography variant="h4" style={styles.Typography}>
											Vaccination
										</Typography>
									}
								/>
								<FormLabel component="legend">
									<Expansion treatement={'vaccination'} duration={15} />
								</FormLabel>
								<FormControlLabel
									value="Check-up"
									control={<Radio />}
									label={
										<Typography variant="h4" style={styles.Typography}>
											Check-up
										</Typography>
									}
								/>
								<FormLabel component="legend">
									<Expansion treatement={'check-up'} duration={30} />
								</FormLabel>
								<FormControlLabel
									value="Initial examination"
									control={<Radio />}
									label={
										<Typography variant="h4" style={styles.Typography}>
											Initial examination
										</Typography>
									}
								/>
								<FormLabel component="legend">
									<Expansion treatement={'initial examination'} duration={60} />
								</FormLabel>
							</RadioGroup>
						</FormControl>
					</Paper>
				</Grid>
				<Footer urlNext={'/time'} btnText={'Next'} />
			</Grid>

			// </div>
		);
	}
}

export default Treatment;
