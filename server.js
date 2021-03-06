const express = require("express");
const PORT = process.env.PORT || 3002;
const app = express();
require("dotenv").config();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
