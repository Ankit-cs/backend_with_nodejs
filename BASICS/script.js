const fs=require('fs');

const http=require('http');
const server=http.createServer(function (req,res){
    res.end("hello hi kaise ho");
})
server.listen(5500);

// fs.writeFile("hey.txt","hey hello kaise ho[,]", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.appendFile("hey.txt","Mein toh bilkul sahi ho tum kaise ho ", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.rename("hey.txt","hello.txt", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.unlink("hello.txt", function(err){
//     if(err) console.log(err);
//     else console.log("removed");
// })
