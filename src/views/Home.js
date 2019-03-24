import React, { Component } from 'react';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';
import axios from 'axios';

class Home extends Component {
	state = { todos: [] };

	deleteTodo = (id) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then((res) => {
				const todos = this.state.todos.filter((todo) => todo.id !== id);
				this.setState({ todos });
			})
			.catch((err) => console.log(err));
	};

	addTodo = (newTodo) => {
		const { title, completed } = newTodo;
		axios
			.post('https://jsonplaceholder.typicode.com/todos', {
				title,
				completed
			})
			.then((res) => {
				const todos = this.state.todos;
				todos.push(res.data);
				this.setState({ todos });
			})
			.catch((err) => console.log(err));
	};

	componentWillMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then((response) => {
				this.setState({
					todos: response.data
				});
			})
			.catch((err) => console.error(err));
	}
	render() {
		return (
			<div>
				<AddTodo onCreate={this.addTodo} />
				<Todos todos={this.state.todos} onDelete={this.deleteTodo} />
			</div>
		);
	}
}
export default Home;
