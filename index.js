const express = require('express');
const path = require('path');
const app = express();

// Parsing request cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define routes with dynamic parameters
app.get("/profile/:username", function(req, res) {
    res.send(`Welcome, ${req.params.username}`);
});

// app.get("/profile/:username/:age/:rno/:college/:livein", function(req, res) {
//     res.send(`Welcome, ${req.params.username} of age ${req.params.age} with rno ${req.params.rno} studyin in university ${req.params.college} live in ${req.params.livein}`);
// });

// Route for rendering the index.ejs file
app.get("/", function(req, res) {
    res.render("index"); // Render the index.ejs file
});

// Start the server
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
