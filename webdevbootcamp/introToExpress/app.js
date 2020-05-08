var express = require("express");
var app = express();

// "/" Hi there!
app.get("/", function(req, res){
    res.send("Hi There!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" => "MEAO!!!"
app.get("/dog", function(req, res){
    console.log("Someone made a request to /dog");
    res.send("MEAO!!!");
});

app.get("/r/:subName", function(req, res){
    var sName = req.params.subName;
    res.send("WELCOME TO THE " + sName.toUpperCase() + " SUB PAGE!");
});

app.get("/r/:subName/comments/:id/:title", function(req, res){
    console.log(req.params);
    res.send("Welcome to the comments page!!!");
});

//ERROR PAGE
app.get("*", function(req, res){
    res.send("YOU ARE A STAR!!!");
});

//Tell express to listen for requests (start server)

app.listen(3000, function(){
    console.log("Your app is hosted in localhost:3000");
});

//For cloud9 or goorm 
//app.listen(process.env.PORT, process.env.IP);