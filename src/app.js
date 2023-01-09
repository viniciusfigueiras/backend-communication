import express from "express";
import port from "./config.js";
const app = express();

app.set('port', port || 3000);

app.get('/', function (req, res) {
    res.send('Hello World!');
  });

app.listen(app.get('port'));