import express from "express";
import port from "./config.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/info', function (req, res) {
  res.status(200).json({info: 'preset text'});
});

app.set('port', port || 3000);

app.listen(app.get('port'));