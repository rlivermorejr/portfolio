import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
	const [form, setForm] = useState({
		name: "",
		position: "",
		level: "",
		records: [],
	});
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchData() {
			// This gets the record id and sends it to the backend in the url.
			const id = params.id.toString();
			const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);

			if (!response.ok) {
				// If there is an error with the response, we'll display it.
				const message = `An error has occurred: ${response.statusText}`;
				window.alert(message);
				return;
			}
			// This will parse the response into an object.
			const record = await response.json();
			if (!record) {
				// If there is no record, we'll display an error.
				window.alert(`Record with id ${id} not found`);
				navigate("/records");
				return;
			}
			// This will set the form to the record object.
			setForm(record);
		}
		// This runs the fetchData function above when the useEffect hook is called.
		fetchData();
		return;
		// useEffect will only run once. Or if the id changes.
	}, [params.id, navigate]);

	// These methods will update the state properties.
	function updateForm(value) {
		return setForm((prev) => {
			return { ...prev, ...value };
		});
	}
	// This runs when the form is submitted.
	// It creates a variable called editedPerson to hold the form data.
	async function onSubmit(e) {
		e.preventDefault();
		const editedPerson = {
			name: form.name,
			position: form.position,
			level: form.level,
		};

		// This will send a post request to update the data in the database.
		await fetch(`http://localhost:5000/update/${params.id}`, {
			method: "POST",
			body: JSON.stringify(editedPerson),
			headers: {
				"Content-Type": "application/json",
			},
		});
		// Redirects to the record list after submitting.
		navigate("/records");
	}

	// This following section will display the form that takes input from the user to update the data.
	return (
		<div>
			<h3>Update Record</h3>
			{/* Executes onSubmit when submit button is clicked */}
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name: </label>
					<input
						type="text"
						className="form-control"
						id="name"
						value={form.name}
						// This will run updateForm when the value of the name changes.
						onChange={(e) => updateForm({ name: e.target.value })}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="position">Position: </label>
					<input
						type="text"
						className="form-control"
						id="position"
						value={form.position}
						// This will run updateForm when the value of the position changes.
						onChange={(e) => updateForm({ position: e.target.value })}
					/>
				</div>
				<div className="form-group">
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="positionOptions"
							id="positionIntern"
							value="Intern"
							checked={form.level === "Intern"}
							// This will run updateForm if Intern is selected.
							onChange={(e) => updateForm({ level: e.target.value })}
						/>
						<label htmlFor="positionIntern" className="form-check-label">
							Intern
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="positionOptions"
							id="positionJunior"
							value="Junior"
							checked={form.level === "Junior"}
							// This will run updateForm if Junior is selected.
							onChange={(e) => updateForm({ level: e.target.value })}
						/>
						<label htmlFor="positionJunior" className="form-check-label">
							Junior
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="positionOptions"
							id="positionSenior"
							value="Senior"
							checked={form.level === "Senior"}
							// This will run updateForm if Senior is selected.
							onChange={(e) => updateForm({ level: e.target.value })}
						/>
						<label htmlFor="positionSenior" className="form-check-label">
							Senior
						</label>
					</div>
				</div>
				<br />

				{/* This is the button that will submit the form. */}
				<div className="form-group">
					<input type="submit" value="Update Record" className="btn btn-primary" />
				</div>
			</form>
		</div>
	);
}
