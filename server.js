const express = require("express");
var datetime = require("node-datetime");
const app = express();
//const Date = require("date-and-time");
var dt = datetime.create(new Date());
var jour = dt.format("W");
var hour = dt.format("H:M");
var Max = "Sunday";
var min = "Saturday";
var MaxHour = "17:00";
var minHour = "09:00";

const now = new Date();
app.use(express.static(__dirname + "/folders"));

app.get("/", (req, res) => {
  if (hour < MaxHour && hour > minHour) {
    if (jour != Max && jour != min) {
      res.sendFile(__dirname + "/folders/home.html");
    } else {
      res.sendFile(__dirname + "/folders/Error.html");
    }
  } else {
    res.sendFile(__dirname + "/folders/Error.html");
  }
});

app.listen(8000, () => {
  console.log("server is running on port 8000..");
});
