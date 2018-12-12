import React, { Component, Fragment } from 'react';
import { Provider as ReduxProvider, connect } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Button, Box } from 'rebass';
import { changeNewTodo, addTodo, removeTodo } from '../../actions';
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

const AddTodoContainer = connect(
	(state) => ({
		value: getNewTodo(state),
	}),
	{
		onSubmit: (_, value) => addTodo(value),
		onChange: (e) => changeNewTodo(e.target.value),
	}
)(AddTodo);

const ListTodos = ({ todos, onClickItem }) => (
	<Box p={16}>
		<ul>
			{todos.map(({ id, text }) => (
				<li key={id} onClick={(e) => onClickItem(id)}>
					{text}
				</li>
			))}
		</ul>
	</Box>
);

const ListTodosContainer = connect(
	(state) => ({
		todos: getVisibleTodos(state),
	}),
	(dispatch) => ({ onClickItem: (id) => dispatch(removeTodo(id)) })
)(ListTodos);

class App extends Component {
	render() {
		const { store } = this.props;
		return (
			<ReduxProvider store={store}>
				<ThemeProvider theme={theme}>
					<Fragment>
						<GlobalStyle />
						<AddTodoContainer />
						<ListTodosContainer />
					</Fragment>
				</ThemeProvider>
			</ReduxProvider>
		);
	}
}

export default App;
