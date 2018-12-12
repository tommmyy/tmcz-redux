import React, { Component, Fragment } from 'react';
import { Provider as ReduxProvider, connect } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Button, Flex, Box } from 'rebass';
import { fetchCat } from '../../actions';
import { getCats } from '../../reducers';

import theme from './theme';

const GlobalStyle = createGlobalStyle({
	body: {
		margin: 0,
		padding: 0,
	},
	input: { padding: '8px' },
});

const Cats = ({ fetchCat, cats }) => (
	<Flex flexDirection="column" width={1 / 2}>
		<Box>
			<Button type="button" onClick={() => fetchCat()}>
				+ 🐱
			</Button>
		</Box>

		{cats.map(({ id, url }) => (
			<Box key={id}>
				<img src={url} />
			</Box>
		))}
	</Flex>
);

const CatsContainer = connect(
	(state) => ({
		cats: getCats(state),
	}),
	{
		fetchCat,
	}
)(Cats);

class App extends Component {
	render() {
		const { store } = this.props;
		return (
			<ReduxProvider store={store}>
				<ThemeProvider theme={theme}>
					<Fragment>
						<GlobalStyle />
						<CatsContainer />
					</Fragment>
				</ThemeProvider>
			</ReduxProvider>
		);
	}
}

export default App;
