import React, { Component } from 'react';
import TodoItem from './TodoItem';
class Todos extends Component {
	render() {
		return (
			<div>
				{this.props.todos.map((item) => {
					return (
						<TodoItem
							key={item.id}
							todo={item}
							onDelete={this.props.onDelete}
							onCreate={this.props.onCreate}
						/>
					);
				})}
			</div>
		);
	}
}
export default Todos;
