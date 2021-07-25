// jshint esversion 6

module.exports = getDate;

function getDate(){

 let today = new Date();
 let currentDay = today.getDay();

 let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 var day = weekdays[currentDay];

 // object for creating date-format
 var options = {
    weekday : "long",
    day     : "numeric",
    month   : "long" ,
   
};

 var day = today.toLocaleString("en-US", options);
 

 return day;


}