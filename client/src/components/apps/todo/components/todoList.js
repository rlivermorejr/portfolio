import React from "react";
import TodoItem from "./todoItem";

const TodoList = ({ todos }) => {
	return (
		<section className="main">
			<ul className="todo-list">
				{todos.map((todo) => (
					<TodoItem title={todo.title} completed={todo.completed} todoId={todo.id} />
				))}
			</ul>
		</section>
	);
};

export default TodoList;
