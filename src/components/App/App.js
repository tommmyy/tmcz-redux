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
	handleClick = (e) => this.props.dispatch({ type: 'INCREMENT' });

	render() {
		const { value } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<Fragment>
					<GlobalStyle />

					<Box>{value}</Box>
					<Button onClick={this.handleClick} variant="primary">
						+
					</Button>
				</Fragment>
			</ThemeProvider>
		);
	}
}

export default App;
