if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = 3000;

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post(`/:filiale`, (req, res) => {
  const filiale = req.params.filiale;
  console.log(filiale);
  console.log(req.body);
  res.status(200).json(req.body);
});

app.listen(PORT, () => {
  console.log(`Listening on port 3000`);
});
