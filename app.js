const express=require('express');
const app=express();

// routes create karna hai isliye / ka use hota hai

app.use(function(req,res,next){
    console.log("middleware chala");
    next();
});

app.use(function(req,res,next){
    console.log("middleware chala eke aur baar ");
    next();
});


app.get('/',function(req,res){
    res.send("haanji bhadiya sab theek toh hai na ");
})

app.get('/rom',function(req,res){
    res.send("ram rom");
})
app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('Something broke!')
})
app.listen(3000);