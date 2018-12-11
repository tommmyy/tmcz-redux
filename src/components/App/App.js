import React, { Component, Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Button, Box } from 'rebass';
import theme from './theme';

const GlobalStyle = createGlobalStyle({
	body: {
		margin: 0,
		padding: 0,
	},
	input: { padding: '8px' },
});

class App extends Component {
	state = { age: '', clicked: false };

	handleAgeChange = (e) => this.setState({ age: e.target.value });
	handleClick = (e) => this.setState({ clicked: true });
	componentDidMount() {}

	render() {
		const { age, clicked } = this.state;

		return (
			<ThemeProvider theme={theme}>
				<Fragment>
					<GlobalStyle />
					<p className="Age">{age}</p>
					<p className="Clicked">{clicked ? 'Clicked!' : ''}</p>
					<Box>
						<input name="age" value={age} onChange={this.handleAgeChange} />
					</Box>

					<Button onClick={this.handleClick} variant="primary">
						Click
					</Button>
				</Fragment>
			</ThemeProvider>
		);
	}
}

export default App;
