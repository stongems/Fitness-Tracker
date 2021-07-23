const path = require('path');
const mongoose = require("mongoose")
const express = require('express');
 
const app = express();
const PORT = process.env.PORT || 3001;

 

 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Makes public the home URL
app.use(express.static("public"));

app.use(require("./controller/htmlRoutes"));
app.use(require("./controller/apiRoutes"));

 app.listen(PORT, () => console.log('Now listening'));
 
