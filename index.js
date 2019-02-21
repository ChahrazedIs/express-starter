const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser')

//===============================================
//        Set up body parser
//===============================================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//=================================================
//        Set up a public folder
//=================================================
app.use(express.static(path.join(__dirname, '/public')));



//=================================================
//        Routes
//=================================================

app.get('/' , (req , res)=>{
   res.send("Welcome to the express starter by Code with Chahrazed");
} );



//=================================================
//        Start the server
//=================================================

app.listen( port , ()=>{
        console.log(`Server running on port ${port}`);
    });