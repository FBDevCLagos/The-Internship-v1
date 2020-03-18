const express = require("express");
const app = express();

//Port
const port = process.env.PORT || 3000;

//Default Route
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on ${port}`));

module.exports = app;
