const express = require('express');
const path = require('path');
const app = express();
const fs=require('fs');
const { title } = require('process');


// Parsing request cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Route for rendering the index.ejs file
app.get("/", function(req, res) {
    fs.readdir(`./files`,function(err,files){
    res.render("index",{files:files}); // Render the index.ejs file
    })
   
});
app.get("/file/:filename", function(req, res) {
   fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
    res.render('show',{filename:req.params.filename,filedata:filedata});
   })
   
});
app.post("/create", function (req, res) {
    console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split('').join('')}.txt`, req.body.details, function (err) {
        if (err) {
            console.log("Error:", err);
        }
        res.redirect("/");
    });
});


// Start the server
app.listen(3000, function() {
    console.log("Server running on http://localhost:3000");
});





































































































































// Define routes with dynamic parameters
// app.get("/profile/:username", function(req, res) {
//     res.send(`Welcome, ${req.params.username}`);
// });

// app.get("/profile/:username/:age/:rno/:college/:livein", function(req, res) {
//     res.send(`Welcome, ${req.params.username} of age ${req.params.age} with rno ${req.params.rno} studyin in university ${req.params.college} live in ${req.params.livein}`);
// });


