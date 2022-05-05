import React from "react";

export default function Square(props) {
	const { value, onClick } = props;

	return <button onClick={onClick}>{value}</button>;
}
