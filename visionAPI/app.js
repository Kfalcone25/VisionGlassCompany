//#region Requiers
const express = require("express");
const app = express();
const db = require("./database");
const config = require("./config");
const cors = require("cors");
//#endregion

//Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Mock data
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Route to get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Route to get a single user by id
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});

// Define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// POST route for handling any contact form submissions
app.post("/contact", async (req, res) => {
  console.log("Made it here");
  try {
    const { firstName, lastName, email, phone, city, state, zip, description } =
      req.body;
    // You might include form-specific logic here if needed
    const sql = `
            INSERT INTO ContactForms (FirstName, LastName, Email, Phone, City, State, Zip, Description)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?);
        `;
    const result = await db.query(sql, [
      firstName,
      lastName,
      email,
      phone,
      city,
      state,
      zip,
      description,
    ]);
    res.json({
      message: "Contact form submitted successfully",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ message: "Failed to submit contact form" });
  }
});

// Start the server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
