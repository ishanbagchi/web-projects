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
    res.send("MEAO!!!");
});

//Tell express to listen for requests (start server)

app.listen(3000, function(){
    console.log("Your app is hosted in localhost:3000");
});

//For cloud9 or goorm 
//app.listen(process.env.PORT, process.env.IP);