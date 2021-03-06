const { ChartJSNodeCanvas } = require("chartjs-node-canvas");
const { query } = require("express");
var express = require("express");
const { abort, exit } = require("process");
var mp = require("./generateGraph");

var app = express();

let canvas_store = new Map();
const body_invalid_error = "content-type was not valid application/json";

app.use(express.json({ limit: 100000 }));
app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.post("/", (req, res) => {
  if (
    "width" in req.query &&
    "height" in req.query &&
    "backgroundColour" in req.query &&
    Object.keys(req.body).length > 0
  ) {
    mp.generate(req, res);
  } else {
    res.send("need a correct body or params to work ", 403);
  }
});
const port = parseInt(process.argv[process.argv.length - 1]);
if (isNaN(port)) {
  console.log("expected a port number argument to listen to.");
  process.exit(1);
}
app.listen(port, () => {
  console.log("Listening to port " + port);
});
