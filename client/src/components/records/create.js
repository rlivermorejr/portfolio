import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import "./mongoStyles.css";

export default function Create() {
	const [form, setForm] = useState({
		name: "",
		position: "",
		level: "",
	});
	const navigate = useNavigate();

	// These methods will update the state properties.
	function updateForm(value) {
		return setForm((prev) => {
			return { ...prev, ...value };
		});
	}

	// This function will handle the submission.
	async function onSubmit(e) {
		e.preventDefault();

		// When a post request is sent to the create url, we'll add a new record to the database.
		const newPerson = { ...form };

		await fetch("http://localhost:8000/record/add", {
			// Defines the request as a post request.
			method: "POST",
			// Sets the header to be JSON.
			headers: {
				"Content-Type": "application/json",
			},
			// This converts the object to a string and sends it to the body.
			body: JSON.stringify(newPerson),
		}).catch((error) => {
			// If there is an error, we'll display it.
			window.alert(error);
			return;
		});
		// This sets the form to empty.
		setForm({ name: "", position: "", level: "" });
		// This will redirect to the homepage after the record is added.
		navigate("/records");
	}

	// This following section will display the form that takes the input from the user.
	return (
		<div className="main">
			<img
				id="mongoLogo"
				src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"
				alt="mongodb logo"
			></img>
			<h3 className="text-center">Create New Record</h3>
			<form onSubmit={onSubmit} className="d-flex flex-column align-items-center">
				<div className="form-group m-3 w-25 text-center">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						value={form.name}
						onChange={(e) => updateForm({ name: e.target.value })}
					/>
				</div>
				<div className="form-group m-3 w-25 text-center">
					<label htmlFor="position">Position</label>
					<input
						type="text"
						className="form-control"
						id="position"
						value={form.position}
						onChange={(e) => updateForm({ position: e.target.value })}
					/>
				</div>
				<div className="form-group m-3 text-center">
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="positionOptions"
							id="positionIntern"
							value="Intern"
							checked={form.level === "Intern"}
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
							onChange={(e) => updateForm({ level: e.target.value })}
						/>
						<label htmlFor="positionSenior" className="form-check-label">
							Senior
						</label>
					</div>
				</div>
				<div className="form-group text-center">
					<input type="submit" value="Save Record" className="btn btn-primary" />
				</div>
			</form>
			<div className="text-center mt-2">
				<Link className="btn btn-secondary" to="/records">
					Back
				</Link>
			</div>
		</div>
	);
}
