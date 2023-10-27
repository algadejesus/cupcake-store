const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000", // Altere para o URL do seu aplicativo da web
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync().then((connection)=>{
  console.log(connection)
}).catch((err) => {})

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
console.log("----------------------------------");
require("./routers")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});