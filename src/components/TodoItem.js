import React, { Component } from 'react';
const styles = {
	todoItem: {
		background: '#f4f4f4',
		padding: '10px',
		borderBottom: '1px #ccc dotted'
	},
	del: {
		background: '#ff0000',
		color: '#fff',
		border: 'none',
		padding: '5px 9px',
		borderRadius: '50%',
		cursor: 'pointer',
		float: 'right'
	}
};

class TodoItem extends Component {
	state = {
		completed: this.props.todo.completed
	};
	markComplete = () => {
		this.setState({
			completed: !this.state.completed
		});
	};
	render() {
		const todoClass = this.state.completed ? 'is-completed' : '';
		return (
			<div style={styles.todoItem}>
				<p className={todoClass}>
					<input type="checkbox" defaultChecked={this.state.completed} onChange={this.markComplete} />
					{this.props.todo.title}
					<button style={styles.del} onClick={() => this.props.onDelete(this.props.todo.id)}>
						X
					</button>
				</p>
			</div>
		);
	}
}
export default TodoItem;
