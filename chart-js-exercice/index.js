const { ChartJSNodeCanvas } = require("chartjs-node-canvas");
var express = require("express");
const { abort, exit } = require("process");
var app = express();

let canvas_store = new Map();
const body_invalid_error = "content-type was not valid application/json";

app.use(express.json({ limit: 100000 }));
app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.post("/", (req) => {
  console.log(req.body);
  // const canvasRenderService = new CanvasRenderService(
  //   width,
  //   height,
  //   (ChartJS) => {}
  // );
});

const port = parseInt(process.argv[process.argv.length - 1]);
if (isNaN(port)) {
  console.log("expected a port number argument to listen to.");
  process.exit(1);
}
app.listen(port, () => {
  console.log("Listening to port " + port);
});

const { CanvasRenderService } = require("chartjs-node-canvas");

const width = 400; //px
const height = 400; //px

(async () => {
  const configuration = {
    // Add your Chart.js config here
  };
  const image = await canvasRenderService.renderToBuffer(configuration);
  const dataUrl = await canvasRenderService.renderToDataURL(configuration);
  const stream = canvasRenderService.renderToStream(configuration);
})();
