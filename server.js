var express = require('express');

var app = express();

app.use(express.static(__dirname)); 

app.listen('8080', ()=>{
	console.log('successfullly listneing to port 8080'); 
}); 

// app.get('/', (req,res)=>{

// }).listen(8080);