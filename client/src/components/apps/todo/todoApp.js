import React, { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addTodo, clearCompleted } from "./actions/action";

import TodoList from "./components/todoList";

const TodoApp = ({ todos, addTodo, clearCompleted }) => {
	const [newText, setNewText] = useState("");

	const handleAddTodo = (e) => {
		if (e.keyCode === 13) {
			addTodo(newText);
			setNewText("");
		}
	};

	return (
		<section className="todoapp">
			<header className="header">
				<h1>todos</h1>
				<input
					className="new-todo"
					name="newText"
					value={newText}
					onChange={(e) => setNewText(e.target.value)}
					onKeyDown={handleAddTodo}
					placeholder="What needs to be done?"
					autoFocus
				/>
			</header>
			<Routes>
				<Route exact path="/" render={(props) => <TodoList {...props} todos={todos} />} />
				<Route
					path="/active"
					render={(props) => <TodoList {...props} todos={todos.filter((todo) => !todo.completed)} />}
				/>
				<Route
					path="/completed"
					render={(props) => <TodoList {...props} todos={todos.filter((todo) => todo.completed)} />}
				/>
			</Routes>
			<footer className="footer">
				<span className="todo-count">
					<strong>{todos.filter((todo) => !todo.completed).length}</strong> item(s) left
				</span>
				<nav>
					<ul className="filters">
						<li>
							<NavLink exact to="/" className="Nav_Link" activeClassName="activeRoute" activeStyle={{ color: "black" }}>
								All
							</NavLink>
						</li>
						<li>
							<NavLink to="/active" className="Nav_Link" activeClassName="activeRoute" activeStyle={{ color: "black" }}>
								Active
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/completed"
								className="Nav_Link"
								activeClassName="activeRoute"
								activeStyle={{ color: "black" }}
							>
								Completed
							</NavLink>
						</li>
					</ul>
				</nav>

				<button className="clear-completed" onClick={clearCompleted}>
					Clear completed
				</button>
			</footer>
		</section>
	);
};

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
	addTodo: (text) => dispatch(addTodo(text)),
	clearCompleted: () => dispatch(clearCompleted()),
});

export default TodoApp;
