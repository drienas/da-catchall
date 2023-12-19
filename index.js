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
  const body = req.body;

  console.log(`**Neues Event für Filiale ${filiale}**`);

  if (!body.event) {
    res.status(500).send(`Internal Server Error`);
    console.log(body);
    return;
  }

  try {
    let dossier = body.data.dossier;

    let data = {
      event: body.event,
      type: body.object.type,
      user: body.user.name,
      createdAt: dossier.created_at,
      updatedAt: dossier.updated_at,
      completedAt: dossier.completion_date_time,
      customer: dossier.contact,
      vehicle: dossier.vehicle,
      tasks: dossier.workshop_tasks,
    };

    console.log(data);
    console.log(JSON.stringify(data, null, 2));

    res.status(200).send();
  } catch (err) {
    console.log(body);
    console.log(`Fehler ${err}`);
    res.status(500).send();
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port 3000`);
});
