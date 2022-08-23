const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

console.log(process.env.port)

app.get("/", (req,res) => {
    res.send("Hi");
});

app.listen(process.env.port, () => {
  console.log(`listening at port ${process.env.port}`);
});