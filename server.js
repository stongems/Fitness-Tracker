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
 
//  require("dotenv").config();
//  const express = require("express");
//  const { ApolloServer } = require("apollo-server-express");
//  const path = require("path");
 
//  const { typeDefs, resolvers } = require("./schemas");
//  // Import `authMiddleware()` function to be configured with the Apollo Server
//  const { authMiddleware } = require("./utils/auth");
//  const db = require("./config/connection");
 
//  const PORT = process.env.PORT || 3001;
//  const app = express();
 
//  const server = new ApolloServer({
//    typeDefs,
//    resolvers,
//    // Add context to our server so data from the `authMiddleware()` function can pass data to our resolver functions
//    context: authMiddleware,
//  });
 
//  server.applyMiddleware({ app });
 
//  app.use(express.urlencoded({ extended: false }));
//  app.use(express.json());
 
//  // MOVE EVERYTHING BETWEEN THESE TWO COMMENTS
 
//  const { getParks, getAlerts, getThingsToDo, getCampgrounds } = require("./utils/api");
 
//  app.get("/parks", async function (req, res) {
//    res.json(await getParks(req.query));
//  });
 
//  app.get("/alerts", async function (req, res) {
//    console.log(req.query);
//    res.json(await getAlerts(req.query.q));
//  });
 
//  app.get("/thingstodo", async function (req, res) {
//    console.log(req.query);
//    res.json(await getThingsToDo(req.query.q));
//  });
 
//  app.get("/campgrounds", async function (req, res) {
//    console.log(req.query);
//    res.json(await getCampgrounds(req.query.q));
//  });
 
 
//  // MOVE EVERYTHING BETWEEN THESE TWO COMMENTS
 
//  if (process.env.NODE_ENV === "production") {
//    app.use(express.static(path.join(__dirname, "../client/build")));
//  }
 
//  app.get("*", (req, res) => {
//    res.sendFile(path.join(__dirname, "../client/build/index.html"));
//  });
 
//  db.once("open", () => {
//    app.listen(PORT, () => {
//      console.log(`API server running on port ${PORT}!`);
//      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//    });
//  });
 