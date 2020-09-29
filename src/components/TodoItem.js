import React from 'react';

function TodoItem(props) {
	const myColor = props.item.completed ? '#90a4ae' : '#212121';
	const myText = props.item.completed ? 'line-through' : 'none';
	return (
		<div className="todo-item">
			<input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)} />
			<p style={{ color: myColor, textDecoration: myText }}>{props.item.text}</p>
		</div>
	);
}

export default TodoItem;
