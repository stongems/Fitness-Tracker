const path = require('path');
const mongoose = require("mongoose");
const express = require('express');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

 

 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Makes public the home URL
app.use(express.static("public"));


// Creates a routing server
app.use(require("./controller/htmlRoutes"));
app.use(require("./controller/apiRoutes"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout")

 app.listen(PORT, () => console.log('Now listening'));
 
