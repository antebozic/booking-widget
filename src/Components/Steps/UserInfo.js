import React, { Component } from 'react';
import { Header } from '../Layouts';
import { Link as RouterLink } from 'react-router-dom';
import {
	Grid,
	Typography,
	Paper,
	TextField,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText
} from '@material-ui/core';
import ls from 'local-storage';

class UserInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			time: ls.get('time') || '',
			treatment: ls.get('treatment') || '',
			firstName: ls.get('firstName') || '',
			lastName: ls.get('lastName') || '',
			email: ls.get('lastName') || '',
			phone: ls.get('phone') || '',
			allCompleted: false
		};
	}
	handleOpen = () => {
		this.setState({
			open: true
		});
	};
	handleClose = () => {
		this.setState({
			open: false
		});
	};
	clearLS = () => {
		ls.set('treatment', '');
		ls.set('time', '');
		ls.set('firstName', '');
		ls.set('lastName', '');
		ls.set('email', '');
		ls.set('phone', '');
	};

	render() {
		//setting right messages for the user
		let text = 'Once you select treatment and time, it will show here.';
		if ((this.state.time !== '') & (this.state.treatment !== '')) {
			text = `${this.state.treatment} treatment on ${this.state.time}`;
		}
		let dialogText = 'Please fill out all necessary data before submit request.';
		if (
			this.state.time !== '' &&
			this.state.treatment !== '' &&
			this.state.firstName !== '' &&
			this.state.lastName !== '' &&
			this.state.phone !== '' &&
			this.state.email !== ''
		) {
			dialogText = 'Congratulations! You have successfully booked your appointment.';
		}

		const styles = {
			Paper: { height: 150, marginTop: 10, boxShadow: 'none' },
			Grid: {
				textAlign: 'center'
			},
			TextField: {
				width: '51vw'
			},
			Button: {
				position: 'fixed',
				bottom: 17,
				right: '46vw',
				width: '8vw'
			},
			TypographyP: {
				paddingTop: 10
			},
			TypographyH5: {
				paddingTop: 40
			}
		};
		return (
			<Grid container>
				<Header titleText={'Personal Information'} />
				<Grid item sm style={styles.Grid}>
					<Paper style={styles.Paper}>
						<Typography variant="h5" component="h3" style={styles.TypographyH5}>
							You have selected:
						</Typography>
						<Typography component="p" style={styles.TypographyP}>
							{text}
						</Typography>
					</Paper>
					<Paper style={styles.Paper}>
						<form noValidate autoComplete="off">
							<TextField
								id="outlined-first-name"
								label="First Name"
								value={this.state.firstName}
								onChange={(e) => {
									this.setState({ firstName: e.target.value });
									ls.set('firstName', e.target.value);
								}}
								margin="normal"
								variant="outlined"
								style={styles.TextField}
							/>
							<TextField
								id="outlined-last-name"
								label="Last Name"
								value={this.state.lastName}
								onChange={(e) => {
									this.setState({ lastName: e.target.value });
									ls.set('lastName', e.target.value);
								}}
								margin="normal"
								variant="outlined"
								style={styles.TextField}
							/>
							<TextField
								id="outlined-email"
								label="Email"
								value={this.state.email}
								onChange={(e) => {
									this.setState({ email: e.target.value });
									ls.set('email', e.target.value);
								}}
								margin="normal"
								variant="outlined"
								style={styles.TextField}
							/>
							<TextField
								id="outlined-phone"
								label="Phone"
								value={this.state.phone}
								onChange={(e) => {
									this.setState({ phone: e.target.value });
									ls.set('phone', e.target.value);
								}}
								margin="normal"
								variant="outlined"
								style={styles.TextField}
							/>
							<Button
								variant="contained"
								align="center"
								color="secondary"
								onClick={this.handleOpen}
								style={styles.Button}
							>
								Submit
							</Button>
						</form>
					</Paper>
				</Grid>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">{dialogText}</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={() => {
								this.clearLS();
								this.handleClose();
							}}
							color="primary"
							autoFocus
							component={RouterLink}
							to={'/'}
						>
							Close and Exit
						</Button>
					</DialogActions>
				</Dialog>
			</Grid>
		);
	}
}

export default UserInfo;
