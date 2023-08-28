const express = require("express");
const db = require("./config/mongoose");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
require("dotenv").config();
const app = express();
// const port = 8000;

// for reading the request body
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(passport.initialize());
app.use(passport.setAuthenticatedUser);
app.use("/", require("./routes/index"));

// setting up the express server to listen on port 8000
app.listen(process.env.PORT, function (err) {
  if (err) {
    console.log("Error in creating express server");
    return;
  }
  console.log(`Server is up and running on port ${process.env.PORT}`);
  return;
});
