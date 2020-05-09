const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Chamurchi", image: "https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547940752c7cd49f45_340.jpg"},
        {name: "Gorumara", image: "https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e5074417c2f78d39745cd_340.jpg"},
        {name: "Nathua", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417c2f78d39745cd_340.jpg"}
    ]

    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, function(){
    console.log("Your app is running in localhost:3000");
});