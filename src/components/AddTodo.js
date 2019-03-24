import React, { Component } from 'react';

const form = {
	display: 'flex'
};
const text = {
	flex: '10',
	padding: '5px'
};
const submit = {
	flex: '2'
};

class AddTodo extends Component {
	addTodo = (e) => {
		e.preventDefault();
		const title = e.target.title.value;
		e.target.title.value = '';
		return this.props.onCreate({
			title: title,
			completed: false
		});
	};
	render() {
		return (
			<form style={form} onSubmit={this.addTodo}>
				<input type="text" name="title" placeholder="Add Todo" style={text} />
				<input type="submit" value="Submit" className="btn" style={submit} />
			</form>
		);
	}
}
export default AddTodo;
