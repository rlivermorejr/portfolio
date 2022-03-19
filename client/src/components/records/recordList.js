import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
	<tr>
		<td>{props.record.name}</td>
		<td>{props.record.position}</td>
		<td>{props.record.level}</td>
		<td>
			<Link className="btn btn-link" to={`/records/edit/${props.record._id}`}>
				Edit
			</Link>{" "}
			|
			<button
				className="btn btn-link"
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
			const response = await fetch(`http://localhost:5000/record/`);

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
		await fetch(`http://localhost:5000/${id}`, {
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
		<div>
			<h3>Record List</h3>
			<table className="table table-striped" style={{ marginTop: 20 }}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Position</th>
						<th>Level</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{recordList()}</tbody>
			</table>
		</div>
	);
}
