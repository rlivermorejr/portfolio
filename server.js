const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: "./.env" });

// port number
const port = process.env.PORT || 8000;
// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// get driver connection
const dbo = require("./db/conn.js");

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
	// perform a database connection when server starts
	dbo.connectToServer(function (err) {
		if (err) console.error(err);
	});
	console.log(`Server is running on port: ${port}`);
});
