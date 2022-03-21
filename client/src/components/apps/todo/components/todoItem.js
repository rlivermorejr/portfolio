import React from "react";
import { connect } from "react-redux";

import { deleteTodo, toggleTodo } from "../actions/action";

const TodoItem = (props) => {
	return (
		<li className={props.completed ? "completed" : ""}>
			<div className="view">
				<input
					className="toggle"
					type="checkbox"
					checked={props.completed}
					onClick={() => props.toggleTodo(props.todoId)}
				/>
				<label>{props.title}</label>
				<button className="destroy" onClick={() => props.deleteTodo(props.todoId)} />
			</div>
		</li>
	);
};

const mapDispatchToProps = (dispatch) => ({
	deleteTodo: (id) => dispatch(deleteTodo(id)),
	toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
