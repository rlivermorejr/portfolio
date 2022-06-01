import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./mongoStyles.css";

const Record = (props) => (
	<tr>
		<td>{props.record.name}</td>
		<td>{props.record.position}</td>
		<td>{props.record.level}</td>
		<td className="d-flex justify-content-end">
			<Link className="btn btn-primary m-1" to={`/records/edit/${props.record._id}`}>
				Edit
			</Link>
			<button
				className="btn btn-secondary m-1"
				onClick={() => {
					props.deleteRecord(props.record._id);
				}}
			>
				Delete
			</button>
		</td>
	</tr>
);

export default function RecordList() {
	const [records, setRecords] = useState([]);

	// This method fetches the records from the database.
	useEffect(() => {
		async function getRecords() {
			const response = await fetch(`http://localhost:8000/record/`);

			// Checks if the response is ok.
			if (!response.ok) {
				const message = `An error occurred: ${response.statusText}`;
				window.alert(message);
				return;
			}
			// Parses the response into an object.
			const records = await response.json();
			// Sets state to the parsed response object.
			setRecords(records);
		}
		// This runs the getRecords function above when the useEffect hook is called.
		getRecords();
		return;
		// useEffect will only run once or if the length of records changes.
	}, [records.length]);

	// This method will delete a record
	async function deleteRecord(id) {
		// Fetches the record from the backend by passing the id as a parameter.
		await fetch(`http://localhost:8000/${id}`, {
			method: "DELETE",
		});

		const newRecords = records.filter((el) => el._id !== id);
		setRecords(newRecords);
	}

	// This method will map out the records on the table
	function recordList() {
		return records.map((record) => {
			// This will pass each record to the Record component above.
			return <Record record={record} deleteRecord={() => deleteRecord(record._id)} key={record._id} />;
		});
	}

	// This following section will display the table with the records of individuals.
	return (
		<div className="main">
			<img
				id="mongoLogo"
				src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"
				alt="mongodb logo"
			></img>
			<h3 className="text-center">Record List</h3>
			<div className="d-flex flex-column align-items-center">
				<table className="table table-striped w-75" id="mongoList">
					<thead>
						<tr>
							<th>Name</th>
							<th>Position</th>
							<th>Level</th>
							<th className="d-flex justify-content-end">Action</th>
						</tr>
					</thead>
					<tbody>{recordList()}</tbody>
				</table>
			</div>
			<div className="create-button">
				<Link className="btn btn-primary" to="/records/create">
					Create Record
				</Link>
			</div>
		</div>
	);
}
