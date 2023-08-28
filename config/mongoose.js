const mongoose = require("mongoose");

//making connection for mongodb
mongoose.connect(
  "mongodb+srv://vraghu45577:IwElLoZR58uzjj9v@hospital-api.2r9gmyv.mongodb.net/hospital-api?retryWrites=true&w=majority"
);

const db = mongoose.connection;

// if error or connection failed
db.on("error", console.error.bind(console, "Error connecting to database"));

// if connection is success
db.once("open", function () {
  console.log("Database connection successful!!!");
});
