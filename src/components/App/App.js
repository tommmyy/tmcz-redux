import React, { Component, Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Button, Box } from 'rebass';
import { increment, decrement, reset } from '../../actions';
import theme from './theme';

const GlobalStyle = createGlobalStyle({
	body: {
		margin: 0,
		padding: 0,
	},
	input: { padding: '8px' },
});

class App extends Component {
	render() {
		const { value, dispatch } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<Fragment>
					<GlobalStyle />

					<Box>{value}</Box>
					<Button onClick={() => dispatch(increment())} variant="primary">
						+
					</Button>
					<Button onClick={() => dispatch(decrement())} variant="primary">
						-
					</Button>
					<Button onClick={() => dispatch(reset())} variant="primary">
						0
					</Button>
				</Fragment>
			</ThemeProvider>
		);
	}
}

export default App;
