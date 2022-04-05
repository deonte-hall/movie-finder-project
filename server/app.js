// Establish all dependencies
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();
//Start the server
const app = express();
//Logging each request with morgan's "dev" format
app.use(morgan("dev"));
//Create an empty array to push the movie data into
let movieArr = [];
//Getting response from GET request at "/"
app.get('/', function(req, res){
// console.log(req.url);
console.log(req.query.i);
axios.get('http://www.omdbapi.com'+ req.url + '&apikey=' + process.env.API_KEY)
.then(function(response){
//dstruct res data, by grabbing these indvi key val pairs, estab a var with our destrut iteams 
//estab a new obj with our destr var 
    console.log(response.data["Title"], response.data["Year"], response.data["imdbID"])

    let {Title, Year, imdbID} = response.data;
   // let newMovie = {Title,Year,imdbID}
                    //  let title = res.data["Title"];
                    //  let year = res.data["Year"];
                    //  let id = res.data["imdbID"];
 movieArr.push({Title, Year, imdbID});
res.send({Title, Year, imdbID});
console.log(movieArr);

})
//if(req.url[2]== "i"){
//for(i = 0; i < movieArray.length; i++){
//if(req.query.i == movieArray[i][id])
//}
//}
});
//Iterate through the movieArray to see if data maches with Omdb
//If data maches, return it using an if statement
//Else If the data doesn't match, access API directly
//Push API information into movieArray
// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter
module.exports = app;
// using morgan to log all incoming request 
// the data well be using is OMDB ( axios library)
// Have a server that can communicate with another  server