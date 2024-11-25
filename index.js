const express = require("express");
const { dbconnect } = require("./models/db");
const router = require("./routes/todo");
const app = express();

app.use(express.json());

dbconnect;

app.use("/todo", router);

app.listen(3000);
