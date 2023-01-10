import express from "express";
import port from "./config.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/info/:queryParams', function (req, res) {
  const { queryParams } = req.params;
  const welcomeObj = {
    name: queryParams
  }
  var jsonMsg= JSON.stringify(welcomeObj);
  res.status(200).json(jsonMsg);
});

app.post('/post/:parcel', (req, res) => {
  const { parcel } = req.body;
  if(!parcel) {
    return res.status(400).send({status:'failed'});
  }
  console.log(parcel);
  res.status(200).send({status: 'recieved'});
});

app.set('port', port || 3000);

app.listen(app.get('port'));