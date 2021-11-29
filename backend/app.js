const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Knex = require("knex");
const knexConfig = require("./knexfile");
const { Model } = require("objection");
const cors = require("cors");

const knex = Knex(knexConfig.development);
Model.knex(knex);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const route = require("./routes/index");
//const userRoute = require("./routes/users");

app.use(cors());

app.use("/", route);
//app.use("/signup", userRoute);

app.listen(4000, function () {
  console.log("App Started!");
  console.log("Postgress username", process.env.POSTGRES_USERNAME);
  console.log("Postgress password", process.env.POSTGRES_PASSWORD);
  console.log("Postgress host", process.env.POSTGRES_HOST);
  console.log("Postgress db", process.env.POSTGRES_DATABASE);
  console.log("Postgress dev or prod", process.env.NODE_ENV);
});
