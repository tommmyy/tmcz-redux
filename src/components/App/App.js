import React, { Component, Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Button, Box } from 'rebass';
import { changeNewTodo, addTodo } from '../../actions';
import { getNewTodo, getVisibleTodos } from '../../reducers';

import theme from './theme';

const GlobalStyle = createGlobalStyle({
	body: {
		margin: 0,
		padding: 0,
	},
	input: { padding: '8px' },
});

const AddTodo = ({ onChange, onSubmit, value }) => (
	<form
		onSubmit={(e) => {
			e.preventDefault();

			onSubmit(e, value);
		}}
	>
		<input value={value} onChange={onChange} />
		<Button type="submit">+</Button>
	</form>
);

const ListTodos = ({ todos }) => (
	<Box p={16}>
		<ul>
			{todos.map(({ id, text }) => (
				<li key={id}>{text}</li>
			))}
		</ul>
	</Box>
);

class App extends Component {
	render() {
		const { state, dispatch } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<Fragment>
					<GlobalStyle />
					<AddTodo
						onChange={(e) => dispatch(changeNewTodo(e.target.value))}
						value={getNewTodo(state)}
						onSubmit={(_, value) => dispatch(addTodo(value))}
					/>
					<ListTodos todos={getVisibleTodos(state)} />
				</Fragment>
			</ThemeProvider>
		);
	}
}

export default App;
