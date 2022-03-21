import { combineReducers } from "redux";

import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from "../actions/action";
import todosList from "../todos.json";

const todosReducer = (state = todosList, action) => {
	switch (action.type) {
		case ADD_TODO:
			const newTodo = {
				userId: 1,
				id: Math.random(),
				title: action.payload,
				completed: false,
			};
			return [...state, newTodo];
		case DELETE_TODO:
			return state.filter((todo) => todo.id !== action.payload);
		case TOGGLE_TODO:
			return state.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : { ...todo }));
		case CLEAR_COMPLETED:
			return state.filter((todo) => todo.completed === false);

		default:
			return state;
	}
};

export default combineReducers({ todos: todosReducer });
