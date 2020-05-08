var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
    //res.send("<h1>Welcome to the HOME PAGE!</h1><h2>Blah Blah...</h2>");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My addorable pet Jimmy", author: "Iman"},
        {title: "Why do you love Panda?", author: "Ishan"}
    ];

    res.render("posts", {posts: posts});
});

app.listen(3000, function(){
    console.log("Your app is running in localhost:3000");
});