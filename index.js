// console.log(__dirname+'/public')
const express = require('express');
const path=require('path');
const app = express();

/* Both lines are used for parsing request cookies  */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public',express.static(path.join(__dirname,'public')));
app.set('view engine','ejs')

// app.get("/", function(req, res) {
//     res.send("chal raha hai ");
// });

app.get("/", function(req, res) {
    res.render("index"); // No need to include ./ or .ejs
});


app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
