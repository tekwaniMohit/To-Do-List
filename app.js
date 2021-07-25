//jshint version  6

const express  = require("express");         //express 
const bodyParser = require("body-parser");  //body-parser


const app =  express();
const date = require(__dirname + "/date.js");

var items = [];

// to use body-parser
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static("public"));

// to start using EJS.
app.set('view engine', 'ejs');



// sending GET method.
app.get("/", function(req,res){
    
   
   
// Logical condition for displaying the day.
    
 let day = date();

    res.render("list" , {kindOfDay : day , newListItems : items});
})

// sending a POST request
app.post("/", function(req,res){
    var item = req.body.newItem;
     
    items.push(item);
    

    res.redirect("/");


});
    
// port at which server runs.
app.listen(3000 , function(){
    console.log("You’re server is good to go !!");
})